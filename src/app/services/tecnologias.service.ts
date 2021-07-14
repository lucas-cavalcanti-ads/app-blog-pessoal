import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TecnologiasService{

    listaTecnologiasBackEnd: Array<String> = [];
    listaTecnologiasFrontEnd: Array<String> = [];
    listaTecnologiasFerramentas: Array<String> = [];
    listaTecnologiasMobile: Array<String> = [];
    listaTecnologiasMetodologias: Array<String> = [];

    constructor(){}

    buscarTecnologiasBackEnd(): Array<String> {
        return this.listaTecnologiasBackEnd = ["Spring Boot", "Maven", "Java", "Java EE"];        
    }

    buscarTecnologiasFrontEnd(): Array<String> {
        return this.listaTecnologiasFrontEnd = ["Angular 2+", "Angular JS", "Type Script", "Java Script", "Bootstrap", "HTML 5", "CSS 3"];
    }

    buscarTecnologiasFerramentas(): Array<String> {
        return this.listaTecnologiasFerramentas = ["Jira Corp", "Gitlab", "Github", "Postman", "Swagger", "Adobe XD", "Android Studio"];
    }

    buscarTecnologiasMobile(): Array<String> {
        return this.listaTecnologiasMobile = ["React Native", "Kotlin"];
    }

    buscarTecnologiasMetodologias(): Array<String> {
        return this.listaTecnologiasMetodologias = ["Rest", "JSON", "Metodologia Ágil (Scrum, Kanban)", "UX/UI"];
    }
}