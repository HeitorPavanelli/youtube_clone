import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Videos } from 'src/app/shared/models/Videos';

const URL = "http://localhost:5000/youtube/videos";

@Injectable({
  providedIn: 'root'
})
export class PrincipalYtService {

}
