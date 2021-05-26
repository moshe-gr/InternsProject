import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  name = '';
  telephone = '';
  code = '1357'
  wrong = false;
  codeInsert = {
    first: '',
    second: '',
    third: '',
    fourth: ''
  }
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.name = this.registerService.user.firstName;
    this.telephone = this.registerService.user.telephone;
  }
  register(): void {
    if ('' + this.codeInsert.first + this.codeInsert.second + this.codeInsert.third + this.codeInsert.fourth == this.code) {
      this.router.navigate(["/register3"]);
    }
    else {
      this.wrong = true;
    }
  }
  onDigitInput(event: any, value: string){
    if ((value || value == '0') && +value <= 9 && event.code !== 'Backspace') {
      event.srcElement.nextElementSibling.focus();
    }
    if (event.code === 'Enter') {
      this.register()
    }
    else if (event.code === 'Backspace' && !value) {
      event.srcElement.previousElementSibling.focus();
    }
  }

}