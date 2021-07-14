import { ListaTecnologias } from './../../models/listaTecnologia.model';
import { TecnologiasService } from './../../services/tecnologias.service';
import { UtilitarioService } from './../../services/utilitario.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  listaTecnologias: Array<ListaTecnologias> = [];
  
  exibeSpinner: boolean = true;

  constructor(private serviceTecnologias:TecnologiasService, private serviceUtilitario: UtilitarioService ) { }

  async ngOnInit(): Promise<void> {
    await this.serviceUtilitario.delay();
    this.listaTecnologias = this.serviceTecnologias.buscarTodasTecnologias();
    this.exibirSpinner();    
  }

  exibirSpinner(){
    this.exibeSpinner = false;
  }
}
