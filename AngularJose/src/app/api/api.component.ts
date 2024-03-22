import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  
  DogImageUrl: string ='';

  constructor(private http: HttpClient){
    ('José Valenzuela - Api')
  }

  ngOnInit(): void {
    this.getDogImage();
  }

  getDogImage(): void {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';
    this.http.get(apiUrl).subscribe((response: any) => {
        this.DogImageUrl = response[0].url;
    });
  }

  refreshImage(): void {
    this.getDogImage();
  }
}
