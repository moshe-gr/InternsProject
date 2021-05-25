import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { Intern } from 'src/app/models/intern';
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

  constructor(private registerService: RegisterService, private usersService: UsersService, public webcamImage: WebcamImage) {
    this.user = registerService.user;
  }
  
  ngOnInit(): void {
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
    this.webcamImage = webcamImage;
    this.user.pic = webcamImage;
    this.usersService.updateUser(this.user.passport, this.user);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  register() {
    this.registerService.registerUser();
  }

}