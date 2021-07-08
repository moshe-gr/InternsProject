import { Component, OnInit } from '@angular/core';
import { FileServerService } from 'src/app/services/file-server.service';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { TestService } from 'src/app/services/test.service';
import { TestModel } from 'src/app/models/test.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tasks: TestModel["tasks"] = [];
  user: User;

  constructor(private testService: TestService, private fileServerService: FileServerService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.user = this.currentUserService.user;
    this.testService.getSupervisorTests(this.user.more_info._id).subscribe(
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
                name: this.fileServerService.urlToFile.split("-*-")[1],
                file_url: this.fileServerService.urlToFile
              }
            }
          ).subscribe(
            () => {
              this.testService.getSupervisorTests(this.user.more_info._id).subscribe(
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

  openFile(task: TestModel['tasks'][0]) {
    const downloader = document.createElement('a');
    downloader.href = task.file_url;
    downloader.target = "_blank";
    downloader.download = task.name;
    downloader.click();
  }

  deleteFile(task: TestModel['tasks'][0]) {
    this.fileServerService.fileDelete('.*.' + task.file_url.split('.*.')[1]).subscribe(
      () => this.testService.deleteTest(
        this.currentUserService.user.more_info.tasks._id,
        task.file_url
      ).subscribe(
        () => {
          this.testService.getSupervisorTests(this.user.more_info._id).subscribe(
            tests => {
              this.currentUserService.user.more_info.tasks = tests;
              this.tasks = this.currentUserService.user.more_info.tasks.tasks;
              this.tasks.forEach(task => task.modified = new Date(task.modified));
            },
            err => console.error(err)
          );
        },
        err => console.error(err)
      ),
      err => console.error(err)
    );
  }

}
