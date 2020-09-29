//import { User } from '@shared/models/user.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[AuthService]
})
export class NavbarComponent implements OnInit {

  public isLogger = false;
  //public user: any;
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, private router: Router) { }

  async ngOnInit() {
//    this.user = await this.authSvc.getCurrentUser();

   // if(this.user) {
   //   this.isLogger = true;
   // }
  }

  async onLogout() {
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    }
    catch(error){console.log(error)}

  }

}
