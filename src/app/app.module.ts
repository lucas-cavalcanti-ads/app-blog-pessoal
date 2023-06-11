import { AppComponent } from './app.component';

import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PortifolioComponent,
    SobreComponent,
    TecnologiasComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
