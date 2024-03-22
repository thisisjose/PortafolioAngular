import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('José Valenzuela - Portafolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
