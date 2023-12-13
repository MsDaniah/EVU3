import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { EgresoComponent } from './egreso/egreso.component';
import { VerformularioComponent } from './verformulario/verformulario.component';
import { VeregresoComponent } from './veregreso/veregreso.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    EgresoComponent,
    VerformularioComponent,
    VeregresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
