import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CurrentUserService } from './currentUser.service';

@Injectable({
  providedIn: 'root'
})
export class FileServerService {

  urlToFile: string;

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  fileUpload(file, name: string) {
    this.httpClient.post('http://localhost:8080/api/awsupload/img', { filename: name, content_type: file.type }, this.authService.getOptions()).subscribe(
      res => {
        console.log(res);
        let obj = res["params"];
        let formData = new FormData();
        for (const key in obj) {
          formData.append(key, obj[key]);
        }
        formData.append('file', file, name);
        formData.append('content-type', file.type);
        this.httpClient.post(res["endpoint_url"], formData, { responseType: 'text', observe: 'response' }).subscribe(
          data => {
            console.log(data),
            this.urlToFile = res["endpoint_url"] + '/' + res["params"]["key"]
           },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }

}
