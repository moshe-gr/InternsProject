import { Component, OnInit } from '@angular/core';
import { InternService } from 'src/app/services/intern.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {

  constructor(public registerService: RegisterService, private internService: InternService) { }

  ngOnInit(): void {
  }

  updateProfile() {
    this.internService.createIntern( 
      {
        _id: this.registerService.user._id,
        intern_info: {
          personal: this.registerService.user.intern_info.personal,
          professional: this.registerService.user.intern_info.professional
        }
      }
    ).subscribe();
  }
}
