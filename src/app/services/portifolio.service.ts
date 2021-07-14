import { Portifolio } from './../models/portifolio.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PortifoliosService{

    listaPortifolios: Array<Portifolio> = [];
    
    constructor(){}

    buscarPortifolios(): Array<Portifolio> {
        return this.listaPortifolios = [
            {
                title: "Blog Frontend",
                url_image: "../../../assets/img/blog-frontend.png",
                description: "Uma Land Page criada durante o meu desenvolvimento no Framework Bootstrap.",
            },
            {
                title: "Projeto Hotel",
                url_image: "../../../assets/img/projeto-hotel.png",
                description: "Essa foi a primeira Land Page que criei com HTML 5 e CSS 5.",
            },
            {
                title: "Cadastro de Imagem",
                url_image: "../../../assets/img/cadastro.png",
                description: "Aplicação em Angular JS que permite o cadastro, exlusão e alterações de imagens.",
            },
            {
                title: "Protótipo Bytebank - UX / UI",
                url_image: "../../../assets/img/prototipo-bytebank.png",
                description: "Protótipo realizado durante o meu desenvolvimento em UX e UI.",
            },
            {
                title: "Land Page Challenger",
                url_image: "../../../assets/img/landpage-b2w.png",
                description: "Essa é uma Land Page que foi proposta pela FIAP devido a Challenger.",
            },
            {
                title: "Protótipo Aplicação Challenger",
                url_image: "../../../assets/img/aplicacao-b2w.png",
                description: "Protótipo da aplicação para a problemática proposta.",
            }
        ];
    }    
}