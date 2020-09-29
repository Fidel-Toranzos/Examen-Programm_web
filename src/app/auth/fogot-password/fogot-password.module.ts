import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FogotPasswordRoutingModule } from './fogot-password-routing.module';
import { FogotPasswordComponent } from './fogot-password.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FogotPasswordComponent],
  imports: [
    CommonModule,
    FogotPasswordRoutingModule,
    ReactiveFormsModule
  ]
})
export class FogotPasswordModule { }
