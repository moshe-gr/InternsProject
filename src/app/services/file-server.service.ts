import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FileServerService {

  baseUtrl: string = environment.myServer + 'api/awsS3/';
  urlToFile: string;

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  async fileUpload(file, name: string): Promise<void> {
    try {
      name = '.*.' + Date.now() + '-*-' + name;
      const res = await this.httpClient.post(
        this.baseUtrl + 'upload',
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
      await this.httpClient.post(
        res["endpoint_url"],
        formData,
        { responseType: 'text', observe: 'response' }
      ).toPromise();
      this.urlToFile = res["endpoint_url"] + '/' + res["params"]["key"];
    }
    catch {
      throw new Error();
    }    
  }

  fileDownload(fileUrl: string): Observable<Blob> {
    return this.httpClient.get<Blob>(
      fileUrl,
      { responseType: 'blob' as 'json' }
    );
  }

  fileDelete(fileName: string): Observable<object> {
    return this.httpClient.delete(
      this.baseUtrl + 'delete/' + fileName,
      this.authService.getOptions()
    );
  }

}
