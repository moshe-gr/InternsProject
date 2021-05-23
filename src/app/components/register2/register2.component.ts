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
  onDigitInput(event: any){
    if (event.code === "Digit0" || event.code === "Digit1" || event.code === "Digit2" || event.code === "Digit3" || event.code === "Digit4" || event.code === "Digit5" || event.code === "Digit6" || event.code === "Digit7" || event.code === "Digit8" || event.code === "Digit9")
        event.srcElement.nextElementSibling.focus();
    else if (event.code === 'Enter') {
      this.register()
    }
  }

}