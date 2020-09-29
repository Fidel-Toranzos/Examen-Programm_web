import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolnetRoutingModule } from './solnet-routing.module';
import { SolnetComponent } from './solnet.component';


@NgModule({
  declarations: [SolnetComponent],
  imports: [
    CommonModule,
    SolnetRoutingModule
  ]
})
export class SolnetModule { }
