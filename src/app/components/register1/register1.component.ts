import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {

  id = '';
  fullName = '';
  passport = '';
  telephone = '';
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }
  register() {
    this.registerService.user = { id: +this.id, firstName: this.fullName.split(' ')[0], surName: this.fullName.split(' ')[1], passport: +this.passport, telephone: this.telephone };
  }
  
}
