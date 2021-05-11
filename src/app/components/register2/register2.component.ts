import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  name = '';
  constructor(private registerService: RegisterService,) { }

  ngOnInit(): void {
    this.name = this.registerService.user.firstName;
  }

}