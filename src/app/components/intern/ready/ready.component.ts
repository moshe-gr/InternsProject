import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { InternService } from 'src/app/services/intern.service';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {

  constructor(
    public currentUserService: CurrentUserService,
    private internService: InternService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  updateProfile() {
    this.internService.createIntern(
      this.currentUserService.internInfo
    ).subscribe(
      () => this.currentUserService.getCurrentUser().then(
        () => this.router.navigate(["/overview"])
      ),
      err => console.error(err)
    );
  }
}