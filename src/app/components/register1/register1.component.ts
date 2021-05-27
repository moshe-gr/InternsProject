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

  id: number;
  fullName: string = '';
  passport: number;
  telephone: string = '';
  constructor(private registerService: RegisterService, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  
  register(event?: any) {  
    if (!event || event.code === 'Enter') {     
      if (!this.usersService.getUser(this.passport)) {
        this.registerService.user.id = this.id;
        this.registerService.user.firstName = this.fullName.split(" ")[0];
        this.registerService.user.surName = this.fullName.split(" ")[1];
        this.registerService.user.passport = this.passport;
        this.registerService.user.telephone = this.telephone;
        this.router.navigate(['/register2']);
      }
      else {
        alert("User allready exists");
      }
    }
  }
  
}