import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  exibirSpinner: boolean = true;

  constructor() { }

  ngOnInit(): void {
    console.log("entrou iniciar")
    //this.exibirSpinner = true;
    setTimeout(this.funcaoSpinner, 3000);
  }

  funcaoSpinner(){
    this.exibirSpinner = false;      
    console.log("entrou " + this.exibirSpinner)
  }

}
