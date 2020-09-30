import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[AuthService],
})
export class RegisterComponent implements OnInit {

  submitted = false;
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router: Router, private formBuider:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      acceptTerms: ['', [Validators.required]]
    })
  }
  
  get f(): any{
    return this.registerForm.controls;
  }

  onSubmit(): void{
    this.submitted = true;
    if (this.registerForm.valid) {
      return
    }
  }

  onReset(): void{
    this.submitted = false;
    this.registerForm.reset();
  }

  async onRegister() {
    const {email, password} = this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.router.navigate(['/verificacion-email']);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
