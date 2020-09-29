import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from './auth/send-email/send-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), 
  }, 
  { 
    path: 'login', 
    loadChildren: () => import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  { 
    path: 'register', 
    loadChildren: () => import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'verificacion-email',
    component: SendEmailComponent
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  },
  { 
    path: 'editor', 
    loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule) 
  },
  { 
    path: 'suscriptor', 
    loadChildren: () => import('./suscriptor/suscriptor.module').then(m => m.SuscriptorModule) 
  },
  { 
    path: 'forgot-password', 
    loadChildren: () => import('./auth/fogot-password/fogot-password.module').then(m => m.FogotPasswordModule) 
  },
  { path: 'solnet', loadChildren: () => import('./solnet/solnet.module').then(m => m.SolnetModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
