import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {

  constructor(public currentUserService: CurrentUserService, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  updateProfile() {
    this.usersService.createIntern(
      this.currentUserService.internInfo
    ).subscribe(
      () => this.currentUserService.getCurrentUser().then(
        () => this.router.navigate(["/overview"])
      ),
      err => console.error(err)
    );
  }
}
