import { Portifolio } from './../models/portifolio.model';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PortifoliosService{
    
    constructor(){}

    private montarListaPortifolios(): Array<Portifolio> {
        return [
            {
                title: "BFF Localidades",
                description: "API BFF que realiza a integração entre uma aplicação frontend e as APIs de localizações públicas.",
                link: "https://github.com/lucas-cavalcanti-ads/bff-localidades",
                infos_chaves: ["java", "spring"]
            },
            {
                title: "Projeto Hotel",
                description: "Minha primeira Land Page criada em 2019, criei utilizando com HTML5 e CSS3.",
                link: "https://github.com/lucas-cavalcanti-ads/projeto-interface-hotel",
                infos_chaves: ["html", "css"]
            },
            {
                title: "Portal Covid-19",                
                description: "Aplicação em Angular JS trás estatiscas sobre a doença Covid-19 em todo o mundo, tudo isso obtendo informações via API.",
                link: "https://github.com/lucas-cavalcanti-ads/projeto-covid",
                infos_chaves: ["angularjs"]
            },
            {
                title: "Artigo sobre Github Actions",
                description: "Artigo sobre Github Actions publicado dentro da página do Itaú no Medium.",
                link: "https://medium.com/itautech/github-actions-boas-pr%C3%A1ticas-para-a-automatiza%C3%A7%C3%A3o-de-pipelines-de-entrega-2d142f5aea2f",
                infos_chaves: ["github"]
            }
        ];
    }  
    
    buscarListaPortifolios(): Array<Portifolio>{                
        return this.montarListaPortifolios();
    }
}