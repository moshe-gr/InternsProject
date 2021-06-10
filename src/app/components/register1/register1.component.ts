import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { CurrentUserService } from 'src/app/services/currentUser.service';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {

  id: number;
  fullName: string = '';
  passport: number;
  telephone: string = '';
  constructor(private authService: AuthService, private currentUserService: CurrentUserService, private router: Router, private modalService: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
   }

  ngOnInit(): void {
  }
  
  register(content, event?: any) {  
    if (!event || event.code === 'Enter') {
      this.authService.login(this.passport).subscribe(
      () => {
        this.open(content);
      },
      err => {
        if (err.status == 404) {
          this.currentUserService.user.id = this.id;
          this.currentUserService.user.first_name = this.fullName.split(" ")[0];
          this.currentUserService.user.last_name = this.fullName.split(" ")[1];
          this.currentUserService.user.passport = this.passport;
          this.currentUserService.user.telephone = this.telephone;
          this.router.navigate(['/register2']);
        }
      })
    }
  }
  
  open(content) {
    this.modalService.open(content);
  }
}