import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButDetalComponent } from './but-detal/but-detal.component';
import { DodajButaComponent } from './dodaj-buta/dodaj-buta.component';
import { ONasComponent } from './o-nas/o-nas.component';
import { SklepComponent } from './sklep/sklep.component';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import { ZalogujComponent } from './zaloguj/zaloguj.component';
import { ZarejestrujComponent } from './zarejestruj/zarejestruj.component';

const routes: Routes = [
  { path: "", component: StronaGlownaComponent},
  { path: "sklep", component: SklepComponent},
  { path: "o-nas", component: ONasComponent},
  { path: "zaloguj", component: ZalogujComponent},
  { path: "zarejestruj", component: ZarejestrujComponent},
  { path: "but/:id", component: ButDetalComponent},
  { path: "dodaj", component: DodajButaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
