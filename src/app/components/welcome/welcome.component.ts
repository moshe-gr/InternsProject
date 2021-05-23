import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Intern } from 'src/app/models/intern';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: Intern;
  constructor(private registerService: RegisterService) {
    this.user = this.registerService.user;
  }

  ngOnInit(): void {
  }

}
