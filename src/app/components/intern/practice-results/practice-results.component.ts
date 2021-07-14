import { Component, OnInit } from '@angular/core';
import { AnswerModel } from 'src/app/models/answer.model';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-practice-results',
  templateUrl: './practice-results.component.html',
  styleUrls: ['./practice-results.component.css']
})
export class PracticeResultsComponent implements OnInit {

  done: AnswerModel[] = [];

  constructor(private testService: TestService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.testService.getInternDone(this.currentUserService.user.more_info._id).subscribe(
      data => this.done = data,
      err => console.error(err)
    );
  }

  openFile(task: AnswerModel) {
    const downloader = document.createElement('a');
    downloader.href = task.file_url;
    downloader.target = "_blank";
    downloader.download = task.test.name;
    downloader.click();
  }

}
