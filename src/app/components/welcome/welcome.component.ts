import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: User;
  constructor(private registerService: RegisterService) {
    this.user = this.registerService.user;
  }

  ngOnInit(): void {
  }

}
