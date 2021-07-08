import { Component, OnInit } from '@angular/core';
import { TestModel } from 'src/app/models/test.model';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { FileServerService } from 'src/app/services/file-server.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  todo: TestModel[] = [];

  constructor(private testService: TestService, private fileServerService: FileServerService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.testService.getInternTests(this.currentUserService.user.more_info._id).subscribe(
      tests => {
        this.currentUserService.user.more_info.tasks = tests;
        this.todo = tests;
        this.todo.forEach(tasks => tasks.tasks.forEach(task => task.modified = new Date(task.modified)));
      },
      err => console.error(err)
    );
  }

  downloadFile(task: TestModel['tasks'][0]) {
    this.fileServerService.fileDownload(task.file_url).subscribe(
      data => {
        console.log(data);
        const blob = new Blob([data], { type: data.type });
        const url = window.URL.createObjectURL(blob);
        const downloader = document.createElement('a');
        downloader.href = url;
        downloader.download = task.name;
        downloader.click();
      },
      err => console.error(err)
    );
  }

  openFile(task: TestModel['tasks'][0]) {
    const downloader = document.createElement('a');
    downloader.href = task.file_url;
    downloader.target = "_blank";
    downloader.download = task.name;
    downloader.click();
  }

}
