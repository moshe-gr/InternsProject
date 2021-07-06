import { Component, OnInit } from '@angular/core';
import { FileServerService } from 'src/app/services/file-server.service';
import { UsersService } from 'src/app/services/users.service';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { Supervisor } from 'src/app/models/supervisor.model';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tasks: Supervisor["tasks"][0]["tasks"];

  constructor(private testService: TestService, private fileServerService: FileServerService, private supervisorService: SupervisorService, private currentUserService: CurrentUserService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.testService.getTests(this.currentUserService.user.more_info._id).subscribe(
      tests => {
        this.currentUserService.user.more_info.tasks = tests;
        this.tasks = this.currentUserService.user.more_info.tasks.tasks;
        this.tasks.forEach(task => task.modified = new Date(task.modified));
      },
      err => console.error(err)
    );
  }

  uploadFile(target, task: string) {
    if (target.files[0]) {
      this.fileServerService.fileUpload(target.files[0], target.files[0].name).then(
        () => {
          this.testService.addTest(
            {
              _id: this.currentUserService.user.more_info.tasks._id,
              task:
              {
                task: task,
                name: this.fileServerService.urlToFile.split("/")[this.fileServerService.urlToFile.split("/").length - 1],
                file_url: this.fileServerService.urlToFile
              }
            }
          ).subscribe(
            () => {
              this.testService.getTests(this.currentUserService.user.more_info._id).subscribe(
                tests => {
                  this.currentUserService.user.more_info.tasks = tests;
                  this.tasks = this.currentUserService.user.more_info.tasks.tasks;
                  this.tasks.forEach(task => task.modified = new Date(task.modified));
                },
                err => console.error(err)
              );
            },
            err => console.error(err)
          );
        },
        err => console.error(err)
      );
    }
  }

  downloadFile(task) {
    this.fileServerService.fileDownload(task.file_url).subscribe(
      data => {
        console.log(data);
        const blob = new Blob([data], { type: data.type });
        const url = window.URL.createObjectURL(blob);
        const fileName = task.name;
        const downloader = document.createElement('a');
        downloader.href = url;
        downloader.download = fileName;
        downloader.click();
      },
      err => console.error(err)
    );
  }

  openFile(task) {
    const downloader = document.createElement('a');
    downloader.href = task.file_url;
    downloader.target = "_blank";
    downloader.download = task.name;
    downloader.click();
  }

}
