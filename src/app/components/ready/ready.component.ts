import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {

  constructor(public registerService: RegisterService, private userService: UsersService) { }

  ngOnInit(): void {
  }

  updateProfile() {
    this.userService.updateUser(this.registerService.user._id, { personal: this.registerService.user.personal, professional: this.registerService.user.professional }).subscribe();
  }
}
