import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SklepComponent } from './sklep/sklep.component';
import { ONasComponent } from './o-nas/o-nas.component';
import { ZalogujComponent } from './zaloguj/zaloguj.component';
import { ZarejestrujComponent } from './zarejestruj/zarejestruj.component';
import { ButDetalComponent } from './but-detal/but-detal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { DodajButaComponent } from './dodaj-buta/dodaj-buta.component';

@NgModule({
  declarations: [
    AppComponent,
    SklepComponent,
    ONasComponent,
    ZalogujComponent,
    ZarejestrujComponent,
    ButDetalComponent,
    StronaGlownaComponent,
    DodajButaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
