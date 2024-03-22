import { Component } from '@angular/core';
import { Resume } from '../_models/Resume';
import { ResumeService } from '../servicios/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent {
  resume: Resume[]=[];
  constructor(private services: ResumeService){}

  ngOnInt():void{
    this.services.getResume().subscribe((result: Resume[]) => (this.resume=result))
    console.log(this.resume);
  }
}
