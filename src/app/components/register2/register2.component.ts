import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Intern } from 'src/app/models/intern';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  user: Intern;
  code = '1357'
  wrong: boolean;
  first: number;
  second: number;
  third: number;
  fourth: number;
  
  constructor(private registerService: RegisterService, private router: Router, config: NgbModalConfig, private modalService: NgbModal) {
    this.user = this.registerService.user;
    config.backdrop = 'static';
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
   }

  ngOnInit(): void {
  }
  register(): void {
    if ('' + this.first + this.second + this.third + this.fourth == this.code) {
      if(!this.user.pic){
        this.router.navigate(["/register3"]);
      }
      else if(!this.user.persinal){
        this.router.navigate(["/questionnaire1"]);
      }
      else{
        this.router.navigate(["/register2"]);
      }
    }
    else {
      this.wrong = true;
      setTimeout(() => {
        this.first = null;
        this.second = null;
        this.third = null;
        this.fourth = null;
        this.wrong = false;
      }, 450)
    }
  }
  onDigitInput(event: any) {
    let value = event.srcElement.value;
    if (value && !isNaN(value) && event.code !== 'Backspace') {
      while(event.srcElement.value > 9){
        event.srcElement.value = Math.floor(event.srcElement.value / 10);
      }
      event.srcElement.nextElementSibling.focus();
    }
    if (event.code === 'Enter') {
      this.register();
    }
    else if (event.code === 'Backspace' && !value) {
      event.srcElement.previousElementSibling.focus();
    }
  }

  open(content) {
    this.modalService.open(content);
  }

  save(telephone: string){
    this.registerService.user.telephone = telephone;
  }

}