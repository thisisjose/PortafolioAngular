import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: 'Criticografo', summary: 'Criticografo de personas.', description: 'Basicamente como el nombre lo dice es un criticografo que critica tu fisico.', projectLink: 'https://github.com/thisisjose/CriticografoMVVM', tags: [Tag.CSHARP, Tag.XAMARIN], pictures: ["../../assets/imgrcrit1.png", "../../assets/imgrcrit2.png"]},
    {id: 1, name: 'Calcular Area', summary: 'Aplicación Triangulo.', description: 'Es una aplicación para sacar area de un triangulo calculando sus lados.', projectLink: 'https://github.com/thisisjose/WebApi_Camiones', tags: [Tag.CSHARP, Tag.XAMARIN], pictures: ["../../assets/imgtriangulo.png"]},
    {id: 2, name: 'Series', summary: 'Un programa hecho en windows forms.', description: 'Es un programa donde agregas series y te las muestra en pilas, colas y arreglos.', projectLink: 'https://github.com/thisisjose/ProyectoSeries_DLL-JSVE', tags: [Tag.CSHARP, Tag.WINDOWFORMS], pictures: ["../../assets/Series1.PNG", "../../assets/Series2.PNG", "../../assets/Series3.PNG"]},
    {id: 3, name: 'Calculadora', summary: 'Calculadora de iphone.', description: 'Es una aplicación en la cual puse demasiado empeño para que parezca a la de mi iphone.', projectLink: 'https://github.com/thisisjose/Calculadoraaa', tags: [Tag.CSHARP, Tag.XAMARIN], pictures: ["../../assets/imgcalcu1.png", "../../assets/imgcalcu2.png"]},
    {id: 4, name: 'Notas', summary: 'Aplicación de Bloc de Notas.', description: 'Es una aplicación de notas que cuenta con firebase.', projectLink: 'https://github.com/thisisjose/Notas', tags: [Tag.CSHARP, Tag.FIREBASE], pictures: ["../../assets/imgnota1.png", "../../assets/imgnota2.png"]},
    {id: 5, name: 'PortafolioMVC', summary: 'Portafolio Viejo.', description: 'Es un portafolio que hice el cuatrimestre pasado.', projectLink: 'https://drive.google.com/file/d/1k96dgEcH2C-Y3INx5e7a0gh1kezNZMdj/view?usp=sharing', tags: [Tag.CSHARP, Tag.ASPNET, Tag.JAVASCRIPT], pictures: ["../../assets/portafoliomvc1.PNG", "../../assets/portafoliomvc2.PNG", "../../assets/portafoliomvc3.PNG"]}
  
  
  ]

  constructor() { }

  GetProjects(){
    return this.projects;
  }
  GetProjectById(id: number) : Project{ 
    let project = this.projects.find(project => project.id == id);

    if (project == undefined){
      throw new TypeError('There is not project that matches the id:' + id);
    }
    
    return project;
  }
}
