import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FogotPasswordComponent } from './fogot-password.component';

const routes: Routes = [{ path: '', component: FogotPasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FogotPasswordRoutingModule { }
