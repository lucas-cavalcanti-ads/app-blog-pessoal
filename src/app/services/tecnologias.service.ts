import { ListaTecnologias } from './../models/listaTecnologia.model';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TecnologiasService{

    listaTecnologias: Array<ListaTecnologias> = [];    

    constructor(){}

    montarListaTodasTecnologias(){
        this.listaTecnologias = [
            {
                title: "Back-End",
                tecnologias: ["Spring Boot", "Maven", "Java", "Java EE"]
            },
            {
                title: "Front-End",
                tecnologias: ["Angular 2+", "Angular JS", "Type Script", "Java Script", "Bootstrap", "HTML 5", "CSS 3"]
            },
            {
                title: "Mobile",
                tecnologias: ["React Native", "Kotlin"]
            },
            {
                title: "Ferramentas",
                tecnologias: ["Jira Corp", "Gitlab", "Github", "Postman", "Swagger", "Adobe XD", "Android Studio"]
            },
            {
                title: "Metodologias",
                tecnologias: ["Rest", "JSON", "Metodologia Ágil (Scrum, Kanban)", "UX/UI"]
            }
        ]
    }

    buscarTodasTecnologias(): Array<ListaTecnologias>{        
        this.montarListaTodasTecnologias();
        return this.listaTecnologias;
    }
}