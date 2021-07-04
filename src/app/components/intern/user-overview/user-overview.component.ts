import { Component, OnInit } from '@angular/core';
import { InternInfo } from 'src/app/models/intern-info.model';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { FileServerService } from 'src/app/services/file-server.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  todo: InternInfo["tasks"][0]["tasks"];

  constructor(private fileServerService: FileServerService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.currentUserService.user.more_info.tasks.map(tasks => this.todo.push(tasks.tasks));
    this.todo.forEach(task => task.modified = new Date(task.modified));
  }

  downloadFile(task) {
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

  openFile(task) {
    const downloader = document.createElement('a');
    downloader.href = task.file_url;
    downloader.target = "_blank";
    downloader.download = task.name;
    downloader.click();
  }

}
