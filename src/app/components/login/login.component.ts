import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passport: number;

  constructor(private authService: AuthService, private registerService: RegisterService, private router: Router, private modalService: NgbModal, config: NgbModalConfig) { 
    config.backdrop = 'static';
  }

  ngOnInit(): void {
  }

  login(content) {
    this.authService.login(this.passport).subscribe(
      user => {
      this.registerService.user = user;
      this.router.navigate(["/register2"]);
      },
      err => {        
        if (err.status == 404) {
          this.open(content);
        }
      }
    );
  }

  open(content) {
    this.modalService.open(content);
  }

}
