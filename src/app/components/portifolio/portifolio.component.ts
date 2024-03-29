import { PortifoliosService } from './../../services/portifolio.service';
import { UtilitarioService } from './../../services/utilitario.service';

import { Portifolio } from './../../models/portifolio.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  listaPortifolios: Array<Portifolio> = [];
  exibeSpinner: boolean = true;

  constructor(private servicePortifolio : PortifoliosService, private serviceUtilitario: UtilitarioService) { }

  async ngOnInit(): Promise<void> {
    await this.serviceUtilitario.delay();
    this.exibirSpinner();
    this.listaPortifolios = this.servicePortifolio.buscarListaPortifolios();
  }

  exibirSpinner(){
    this.exibeSpinner = false;
  }

}
