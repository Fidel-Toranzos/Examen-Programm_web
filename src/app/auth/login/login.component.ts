import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
//import { User } from '@app/sha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

async onLogin(){
  const {email, password} = this.loginForm.value;
  try{
    const user = await this.authSvc.login(email, password);
    if (user && user.user.emailVerified) {
      console.log('USER→', user);
      this.router.navigate(['/solnet'])
    }else if(user){
      this.router.navigate(['/solnet']);
    }else{
      window.alert("Cuenta Invalida, por favor ingrese una cuenta valida");
      this.router.navigate(['/login']);
    }
  }
  catch(error){
    console.log(error);
  }
}

}
