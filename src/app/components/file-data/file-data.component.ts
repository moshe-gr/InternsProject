import { Component, Input, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/models/supervisor.model';
import { FileServerService } from 'src/app/services/file-server.service';

@Component({
  selector: 'app-file-data',
  templateUrl: './file-data.component.html',
  styleUrls: ['./file-data.component.css']
})
export class FileDataComponent implements OnInit {

  @Input() task: Supervisor["tasks"][0];

  constructor(private fileServerService: FileServerService) { }

  ngOnInit(): void {
  }

  downloadFile() {
    this.fileServerService.fileDownload(this.task.file_url).subscribe(
      data => {
        console.log(data);
        const blob = new Blob([data], { type: data.type });
        const url = window.URL.createObjectURL(blob);
        // window.open(url);
        const fileName = this.task.name;
        const downloader = document.createElement('a');
        document.body.appendChild(downloader);
        downloader.href = url;
        downloader.download = fileName;
        downloader.click();
      },
      err => console.log(err)
    );
  }

}
