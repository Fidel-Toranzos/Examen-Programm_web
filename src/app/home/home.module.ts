import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { TestimonioComponent } from './testimonio/testimonio.component';


@NgModule({
  declarations: [
    HomeComponent, 
    NavComponent, 
    QuienesComponent, 
    ContactoComponent, 
    RegistroComponent, 
    IngresarComponent, TestimonioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
