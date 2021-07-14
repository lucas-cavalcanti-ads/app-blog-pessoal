import { UtilitarioService } from './../../services/utilitario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  exibeSpinner: boolean = true;

  constructor(private serviceUtilitario: UtilitarioService) { }

  async ngOnInit(): Promise<void> {
    await this.serviceUtilitario.delay(1000);
    this.exibirSpinner();
  }

  exibirSpinner(){
    this.exibeSpinner = false;
  }
}
