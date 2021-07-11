import { Component, OnInit } from '@angular/core';
import { AnswerModel } from 'src/app/models/answer.model';
import { User } from 'src/app/models/user.model';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-to-mark',
  templateUrl: './to-mark.component.html',
  styleUrls: ['./to-mark.component.css']
})
export class ToMarkComponent implements OnInit {

  done: AnswerModel[];
  user: User;
  colors: string[] = [
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-danger",
    "btn-warning",
    "btn-info",
    "btn-light",
    "btn-dark"
  ];

  constructor(private testService: TestService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.user = this.currentUserService.user;
    this.testService.getSupervisorDone(this.user.more_info._id).subscribe(
      data => {
        this.currentUserService.user.more_info.done = data;
        this.done = data;
      },
      err => console.error(err)
    );
  }

  openFile(task: AnswerModel['done'][0]) {
    const downloader = document.createElement('a');
    downloader.href = task.file_url;
    downloader.target = "_blank";
    downloader.download = task.test.name;
    downloader.click();
  }

  markTest(_id, file_url, result) {
    this.testService.markTest(
      _id,
      { file_url: file_url, result: +result }
    ).subscribe(
      () => { },
      err => console.error(err)
    );
  }

}
