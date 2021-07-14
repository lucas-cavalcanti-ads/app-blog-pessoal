import { TecnologiasService } from './../../services/tecnologias.service';
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

  constructor(private serviceTecnologias:TecnologiasService ) { }

  ngOnInit(): void {
    this.listaTecnologiasBackEnd = this.serviceTecnologias.buscarTecnologiasBackEnd();
    this.listaTecnologiasFrontEnd = this.serviceTecnologias.buscarTecnologiasFrontEnd();
    this.listaTecnologiasFerramentas = this.serviceTecnologias.buscarTecnologiasFerramentas();
    this.listaTecnologiasMetodologias = this.serviceTecnologias.buscarTecnologiasMetodologias();
    this.listaTecnologiasMobile = this.serviceTecnologias.buscarTecnologiasMobile();    
  }
}
