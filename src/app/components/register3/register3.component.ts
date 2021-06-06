import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamInitError, WebcamImage } from 'ngx-webcam';

import { Observable, Subject } from 'rxjs';
import { Intern } from 'src/app/models/intern';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterService } from 'src/app/services/register.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {

  public errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  user: Intern;
  msg: string = "please look straight at the camera so we can spot you";
  numTry: number = 0;
  detect;
  public webcamImage: WebcamImage;

  constructor(private authService: AuthService, private registerService: RegisterService, private userService: UsersService, private router: Router) {
    this.user = registerService.user;
  }
  
  ngOnInit(): void {
    this.detect = setInterval(() => {
      this.triggerSnapshot();
      this.numTry++;
      if (this.numTry == 5) {
        clearInterval(this.detect);
        this.msg = "To many trys detection faild"
      }
    }, 3 * 1000);
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
    this.authService.faceDetect(webcamImage).subscribe(
      () => {
        this.webcamImage = webcamImage;
        clearInterval(this.detect);
        this.msg = "Thanks this will use as yuor profile pic";
        setTimeout(() => this.register(), 2 * 1000);
      },
      (err) => {
        this.msg = "ERROR: " + err.error.msg;
      }
    );
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  register(): void{
    if (!this.registerService.user.pic) {
      this.registerService.user.pic = this.webcamImage;
      this.registerService.registerUser();
      this.router.navigate(["/welcome"]);
    }
    else {
      this.registerService.user.pic = this.webcamImage;
      this.userService.updateUser(this.user._id, { pic: this.webcamImage }).subscribe();
      if (!this.registerService.user.personal) {
        this.router.navigate(["/questionnaire1"]);
      }
      else if (!this.registerService.user.professional) {
        this.router.navigate(["/questionnaire2"]);
      }
      else {
        this.router.navigate(["/..."]);
      }
    }
  }

}