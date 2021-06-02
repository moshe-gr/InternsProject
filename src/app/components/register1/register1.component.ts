import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
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
  constructor(private authService: AuthService, private registerService: RegisterService, private usersService: UsersService, private router: Router, private modalService: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
   }

  ngOnInit(): void {
  }
  
  register(content, event?: any) {  
    if (!event || event.code === 'Enter') {
      this.authService.login(this.passport).subscribe(
      () => {
        this.open(content);
      },
      err => {
        if (err.status == 404) {
          this.registerService.user.id = this.id;
          this.registerService.user.first_name = this.fullName.split(" ")[0];
          this.registerService.user.last_name = this.fullName.split(" ")[1];
          this.registerService.user.passport = this.passport;
          this.registerService.user.telephone = this.telephone;
          this.router.navigate(['/register2']);
        }
      })
    }
  }
  
  open(content) {
    this.modalService.open(content);
  }
}