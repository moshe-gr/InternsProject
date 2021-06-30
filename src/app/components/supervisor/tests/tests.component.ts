import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileServerService } from 'src/app/services/file-server.service';
import { UsersService } from 'src/app/services/users.service';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { Supervisor } from 'src/app/models/supervisor.model';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tasks: Supervisor["tasks"];

  constructor(private fileServerService: FileServerService, private supervisorService: SupervisorService, private currentUserService: CurrentUserService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.tasks = this.currentUserService.user.more_info.tasks;
  }

  uploadFile(target, task: string) {
    if (target.files[0]) {
      this.fileServerService.fileUpload(target.files[0], target.files[0].name).then(
        () => {
          console.log(this.fileServerService.urlToFile);
          this.supervisorService.updateSupervisor(
            this.currentUserService.user.more_info._id,
            {
              task: task,
              name: this.fileServerService.urlToFile.split("/")[this.fileServerService.urlToFile.split("/").length - 1],
              file_url: this.fileServerService.urlToFile
            }
          ).subscribe(
            () => {
              this.usersService.getUser(this.currentUserService.user._id).subscribe(
                user => {
                  this.currentUserService.user = user;
                  this.tasks = this.currentUserService.user.more_info.tasks;
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
        // window.open(url);
        const fileName = task.name;
        const downloader = document.createElement('a');
        downloader.href = url;
        downloader.download = fileName;
        downloader.click();
      },
      err => console.error(err)
    );
  }

}
