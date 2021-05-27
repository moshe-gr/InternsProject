import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  name: string;
  telephone: string;
  code = '1357'
  wrong: boolean;
  first: number;
  second: number;
  third: number;
  fourth: number;
  
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.name = this.registerService.user.firstName;
    this.telephone = this.registerService.user.telephone;
  }
  register(): void {
    if ('' + this.first + this.second + this.third + this.fourth == this.code) {
      this.router.navigate(["/register3"]);
    }
    else {
      this.wrong = true;
    }
  }
  onDigitInput(event: any) {
    let value = event.srcElement.value;
    if (value && !isNaN(value) && event.code !== 'Backspace') {
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