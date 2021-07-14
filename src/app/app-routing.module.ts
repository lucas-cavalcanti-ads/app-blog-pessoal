import { HomeComponent } from './components/home/home.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'portifolio', component: PortifolioComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
