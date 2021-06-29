import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileServerService } from 'src/app/services/file-server.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {


  doc;
  constructor(private fileServerService: FileServerService, private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
  }

  uploadFile(target) {
    if (target.files[0]) {
      this.doc = target.files[0];
      this.fileServerService.fileUpload(target.files[0], target.files[0].name);
    }
  }

  df() {
    this.http.get<any>(this.fileServerService.urlToFile, {responseType: 'blob' as 'json'}).subscribe(
      data => {
        const blob = new Blob([data], {type: data.type});
        const url= window.URL.createObjectURL(blob);
        window.open(url);
      },
      err => console.log("err")
    )
  }

}
