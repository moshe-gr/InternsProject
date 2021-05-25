import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/models/intern';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  user: Intern;
  constructor(registerService: RegisterService) {
    this.user = registerService.user;
   }

  ngOnInit(): void {
  }

}
