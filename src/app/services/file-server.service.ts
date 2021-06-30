import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FileServerService {

  urlToFile: string;

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  async fileUpload(file, name: string): Promise<void> {
    try {
      const res = await this.httpClient.post(
        'http://localhost:8080/api/awsupload/img',
        { filename: name, content_type: file.type },
        this.authService.getOptions()
      ).toPromise();
      console.log(res);
      let obj = res["params"];
      let formData = new FormData();
      for (const key in obj) {
        formData.append(key, obj[key]);
      }
      formData.append('file', file, name);
      formData.append('content-type', file.type);
      await this.httpClient.post(res["endpoint_url"], formData, { responseType: 'text', observe: 'response' }).toPromise();
      this.urlToFile = res["endpoint_url"] + '/' + res["params"]["key"];
    }
    catch {
      throw new Error();
    }    
  }

  fileDownload(fileUrl: string): Observable<Blob> {
    return this.httpClient.get<Blob>(fileUrl, { responseType: 'blob' as 'json' });
  }

}
