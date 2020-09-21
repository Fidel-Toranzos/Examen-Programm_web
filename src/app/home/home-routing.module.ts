import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { QuienesComponent } from './quienes/quienes.component';
import { RegistroComponent } from './registro/registro.component';
import { TestimonioComponent } from './testimonio/testimonio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'quienes',
        component: QuienesComponent
      },
      {
        path: 'contacto',
        component: ContactoComponent
      },
      {
        path: 'ingresar',
        component: IngresarComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: 'testimonio',
        component: TestimonioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
