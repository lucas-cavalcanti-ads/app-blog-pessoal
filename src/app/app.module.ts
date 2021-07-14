import { HeaderComponent } from './components/header/header.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CabecalhoComponent,
    SobreComponent,
    PortifolioComponent,
    TecnologiasComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
