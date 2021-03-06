import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Role } from 'src/app/enums/role.enum';
import { AuthService } from 'src/app/services/auth.service';
import { CurrentUserService } from 'src/app/services/currentUser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passport: string;
  userRole: string;

  constructor(private authService: AuthService, private currentUserService: CurrentUserService, private router: Router, private modalService: NgbModal, config: NgbModalConfig) { 
    config.backdrop = 'static';
    this.userRole = Role[this.currentUserService.user.role_number];
  }

  ngOnInit(): void {
  }

  login(content) {
    this.authService.login(this.passport).subscribe(
      user => {
        this.currentUserService.user = user;
        this.router.navigate(["/authLogin"]);
      },
      err => {        
        if (err.status == 404) {
          this.open(content);
        }
        else {
          console.error(err);
        }
      }
    );
  }

  pressEnter(event, content) {
    if (event.code == "Enter") {
      this.login(content)
    }
  }

  open(content) {
    this.modalService.open(content);
  }

}
