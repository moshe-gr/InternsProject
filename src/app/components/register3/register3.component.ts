import { Location } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamInitError, WebcamImage } from 'ngx-webcam';

import { Observable, Subject } from 'rxjs';
import { Role } from 'src/app/enums/role.enum';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { FileServerService } from 'src/app/services/file-server.service';
import { InfoService } from 'src/app/services/info.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit, DoCheck {

  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  user: User;
  msg: string = "please look straight at the camera so we can spot you";
  error: string;
  numTry: number = 0;
  webcamImage: WebcamImage;
  update: boolean;

  constructor(private infoService: InfoService, private fileServerService: FileServerService, private authService: AuthService, private currentUserService: CurrentUserService, private usersService: UsersService, private router: Router, private location: Location) {
    currentUserService.getCurrentUser().then(
      user => this.user = user);
  }

  ngDoCheck(): void {
    if (this.errors.length > 0) {
      this.msg = "camra error please check camra";
    }
    this.update = this.location.isCurrentPathEqualTo("/updateImg");
  }
  
  ngOnInit(): void {
    setTimeout(() => this.triggerSnapshot(), 2 * 1000);
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === 'NotAllowedError') {
      console.warn('Camera access was not allowed by user!');
    }
    this.errors.push(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    //img face detection
    this.authService.faceDetect(webcamImage).subscribe(
      () => {
        this.webcamImage = webcamImage;
        this.error = "";
        this.msg = "Thanks this will use as yuor profile pic";
        let img: Blob = this.dataURItoBlob(webcamImage.imageAsDataUrl);
        this.fileServerService.fileUpload(img, this.user.passport + '.jpg');
        setTimeout(() => this.register(), 3 * 1000);
      },
      (err) => {
        this.numTry++;
        this.error = "ERROR: " + err.error.msg;
        if (this.numTry < 5) {
          setTimeout(() => this.triggerSnapshot(), 1 * 1000);
        }
        else {
          this.msg = "detection faild registration rejected"
          setTimeout(() => this.router.navigate(['/']), 3 * 1000);
        }
      }
    );
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  register(): void{
    //user dosn't exist
    if (!this.update) {
      this.currentUserService.user.pic = this.fileServerService.urlToFile;
      this.usersService.addUser(Object.assign({}, this.currentUserService.user)).subscribe(
        user => {
          this.currentUserService.user = user;
          //supervisor
          if (this.user.role_number == Role.supervisor) {
            this.usersService.createSupervisor(
              {
                user:
                  user._id,
                medical_institution:
                  this.infoService.medical_institutions[
                    Math.floor(Math.random() * this.infoService.medical_institutions.length)
                  ]
              }
            ).subscribe(
              data => this.currentUserService.user.more_info = data._id,
              err => console.log(err)
            );
            this.router.navigate(["/console"]);
          }
          //intern
          else {
            this.router.navigate(["/welcome"]);
          }
        }
      );
    }
    //user updated profile pic
    else {
      this.location.back();
    }
  }

//convert base64 to jpg
  dataURItoBlob(dataURI) {
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: 'image/jpg',
    });
  }

}