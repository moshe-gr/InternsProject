import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {

  exists = false;
  id = '';
  fullName = '';
  passport = '';
  telephone = '';
  constructor(private registerService: RegisterService, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  
  register(event?: any) {
    if (!event || event.code === 'Enter') {
      this.usersService.users.subscribe(interns =>
        interns.find(user =>
          this.exists = +this.passport == user.passport));
          if (!this.exists) {
            this.registerService.user = {
              id: +this.id,
              firstName: this.fullName.split(' ')[0],
              surName: this.fullName.split(' ')[1],
              passport: +this.passport, telephone: this.telephone
            };
            this.router.navigate(['/register2']);
          }
          else {
            alert("User allready exists")
          }
    }
  }
  
}