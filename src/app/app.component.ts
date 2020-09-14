import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mcipFront';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private router: Router,
              private tokenStorageService: TokenStorageService,
              public authService:AuthService
              ){ }
  ngOnInit() {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
          const user = this.tokenStorageService.getUser();
          this.roles = user.roles;
          this.username = user.username;
          }
              }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  onGetMentions(){
    this.router.navigateByUrl("/pagementions");
  }
  onAjouterMention(){
     this.router.navigateByUrl("/new-mention");
  }
}
