import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  pic?: WebcamImage;
  constructor(private registerService: RegisterService) {
    this.pic = registerService.user.pic;
  }

  ngOnInit(): void {
  }

}
