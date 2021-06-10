import { Component, OnInit } from '@angular/core';
import { InternService } from 'src/app/services/intern.service';
import { CurrentUserService } from 'src/app/services/currentUser.service';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {

  constructor(public currentUserService: CurrentUserService, private internService: InternService) { }

  ngOnInit(): void {
  }

  updateProfile() {
    this.internService.createIntern( 
      {
        _id: this.currentUserService.user._id,
        intern_info: {
          personal: this.currentUserService.user.intern_info.personal,
          professional: this.currentUserService.user.intern_info.professional
        }
      }
    ).subscribe();
  }
}
