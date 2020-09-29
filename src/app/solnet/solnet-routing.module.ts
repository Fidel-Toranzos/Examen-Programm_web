import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolnetComponent } from './solnet.component';

const routes: Routes = [{ path: '', component: SolnetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolnetRoutingModule { }
