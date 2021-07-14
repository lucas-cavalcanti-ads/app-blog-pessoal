import { TecnologiasService } from './../../services/tecnologias.service';
import { UtilitarioService } from './../../services/utilitario.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  listaTecnologiasBackEnd: Array<String> = [];
  listaTecnologiasFrontEnd: Array<String> = [];
  listaTecnologiasFerramentas: Array<String> = [];
  listaTecnologiasMobile: Array<String> = [];
  listaTecnologiasMetodologias: Array<String> = [];
  exibeSpinner: boolean = true;

  constructor(private serviceTecnologias:TecnologiasService, private serviceUtilitario: UtilitarioService ) { }

  async ngOnInit(): Promise<void> {
    await this.serviceUtilitario.delay(1000);
    this.exibirSpinner();
    this.listaTecnologiasBackEnd = this.serviceTecnologias.buscarTecnologiasBackEnd();
    this.listaTecnologiasFrontEnd = this.serviceTecnologias.buscarTecnologiasFrontEnd();
    this.listaTecnologiasFerramentas = this.serviceTecnologias.buscarTecnologiasFerramentas();
    this.listaTecnologiasMetodologias = this.serviceTecnologias.buscarTecnologiasMetodologias();
    this.listaTecnologiasMobile = this.serviceTecnologias.buscarTecnologiasMobile();    
  }

  exibirSpinner(){
    this.exibeSpinner = false;
  }
}
