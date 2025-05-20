import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Videos } from '../../models/Videos';
import { Observable } from 'rxjs';

const URL = "http://localhost:5000/youtube/videos";

@Injectable({
  providedIn: 'root'
})
export class VideoUploadYtService {

  constructor(private http: HttpClient) { }

  adicionaVideo(video: Videos): Observable<Videos> {
    return this.http.post<Videos>(URL, video) ?? {};
  }
}
