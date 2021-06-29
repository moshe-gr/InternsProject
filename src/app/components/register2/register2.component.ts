import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Role } from 'src/app/enums/role.enum';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CurrentUserService } from 'src/app/services/currentUser.service';

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
  
  constructor(private currentUserService: CurrentUserService, private router: Router, config: NgbModalConfig, private modalService: NgbModal, private authService: AuthService) {
    this.user = this.currentUserService.user;
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
      { request_id: this.request_id, code: '' + this.first + this.second + this.third + this.fourth, role_number: this.user.role_number }
    ).subscribe(
      result => {
        this.authService.token = result.token;
        //registration
        if (this.router.url == "/register2") {
          this.router.navigate(["/register3"]);
        }
        //supervisor login
        else if (this.user.role_number == Role.supervisor) {
          this.router.navigate(["/console"]);
        }
        //intern login
        else {
          if (!this.user.more_info) {
            this.router.navigate(["/questionnaire1"]);
          }
          else {
            this.router.navigate(["/overview"]);
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
    this.currentUserService.user.telephone = telephone;
  }

}