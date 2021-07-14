import { PortifoliosService } from './../../services/portifolio.service';
import { Portifolio } from './../../models/portifolio.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  listaPortifolios: Array<Portifolio> = [];

  constructor(private servicePortifolio : PortifoliosService) { }

  ngOnInit(): void {
    this.listaPortifolios = this.servicePortifolio.buscarPortifolios();
  }

}
