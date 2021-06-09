import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { InternInfo } from 'src/app/models/intern-info';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterService } from 'src/app/services/register.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  user: User;
  wrong: boolean;
  first: number;
  second: number;
  third: number;
  fourth: number;
  request_id: string;
  
  constructor(private registerService: RegisterService, private router: Router, config: NgbModalConfig, private modalService: NgbModal, private authService: AuthService) {
    this.user = this.registerService.user;
    config.backdrop = 'static';
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    authService.request('972' + this.user.telephone).subscribe(
      data => this.request_id = data.request_id,
      err => {
        alert('ERROR occurred while sending!\nplease try again or enter "1357"');
      }
    );
   }

  ngOnInit(): void {
  }
  register(): void {
    this.authService.check(
      { request_id: this.request_id, code: '' + this.first + this.second + this.third + this.fourth }
    ).subscribe(
      result => {
        this.authService.token = result.token;
        if(this.user.role_number == 1) {
          this.router.navigate(["/console"]);
        }
        else{
          if (!this.user.pic) {
            this.router.navigate(["/register3"]);
          }
          else if (!this.user.intern_info) {
            this.router.navigate(["/questionnaire1"]);
          }
          else {
            this.router.navigate(["/progress"]);
          }
        }
      },
      err => {
        if (err.status == 400) {
            this.wrong = true;
            setTimeout(() => {
              if (err.error.status == 16) {
                this.first = null;
                this.second = null;
                this.third = null;
                this.fourth = null;
                this.wrong = false;
              }
              else if (err.error.status == 17) {
                this.router.navigate(["/"]);
              }
            }, 450);           
        }
        else {
          alert('ERROR occurred!\nplease try again');
        }
      }
    );
  }

  onDigitInput(event: any): void {
    //Handles input and focus on code input elements
    let value = event.target.value;
    if (value && !isNaN(value) && event.code !== 'Backspace') {
      while(event.target.value > 9){
        event.target.value = Math.floor(event.target.value / 10);
      }
      event.target.nextElementSibling.focus();
    }
    if (event.code === 'Enter') {
      this.register();
    }
    else if (event.code === 'Backspace' && !value) {
      event.target.previousElementSibling.focus();
    }
  }

  open(content) {
    this.modalService.open(content);
  }

  save(telephone: string): void {
    this.registerService.user.telephone = telephone;
  }

}