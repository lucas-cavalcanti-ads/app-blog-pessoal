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
        return this.listaTecnologiasFrontEnd;
    }
}