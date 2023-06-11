import { ListaTecnologias } from './../models/listaTecnologia.model';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TecnologiasService{

    constructor(){}

    private montarListaTodasTecnologias(): Array<ListaTecnologias>{
        return [
            {
                title: "Front-End",
                tecnologias: ["Micro Front-End", "Angular 2+", "Angular JS", "Type Script", "Java Script", "Angular Material", "Bootstrap", "HTML 5", "CSS 3"]
            },
            {
                title: "Back-End",
                tecnologias: ["Java", "Spring Boot", "Maven", "BFF"]
            },
            {
                title: "DevOps",
                tecnologias: ["Docker", "Git", "Github", "Github Actions"]
            },
            {
                title: "Cloud",
                tecnologias: ["AWS"]
            },
            {
                title: "Analytics",
                tecnologias: ["SAS", "Google Analytics"]
            },
            {
                title: "Observability",
                tecnologias: ["Splunk", "Grafana"]
            },
            {
                title: "Ferramentas",
                tecnologias: ["Jira Corp", "Insomnia", "Postman", "Swagger", "Adobe XD", "Android Studio"]
            },
            {
                title: "Metodologias",
                tecnologias: ["Arquitetura de Software", "Rest", "Metodologia Ágil (Scrum, Kanban)", "UX/UI"]
            },
            {
                title: "Softs Skills",
                tecnologias: ["Resolução de problemas", "Comunicação", "Liderança", "Trabalho em equipe"]
            }
        ]
    }

    buscarTodasTecnologias(): Array<ListaTecnologias>{                
        return this.montarListaTodasTecnologias();
    }
}