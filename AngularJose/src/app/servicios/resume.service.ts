import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Resume } from '../_models/Resume';


@Injectable({
  providedIn: 'root'
})

export class ResumeService {
  url = 'Resume'
  constructor(private http: HttpClient) { }

  public getResume(): Observable<Resume[]>{
    return this.http.get<Resume[]>(`${environment.apiUrl}/${this.url}`);}
  
}
