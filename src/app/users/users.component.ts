import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users;
  public user;
  mode;

  constructor( private usersService:UsersService,
              public authService:AuthService) { }

  ngOnInit(): void {
    this.initUsers();
  }
  initUsers(){
    this.mode=1;
    this.usersService.getUsers()
    .subscribe(data =>{
      this.users=data;
      console.log(this.users); 
    }, err =>{
      alert(err.error.message);
      //console.log(err);
    })
  }
  onsetAdminRole(username){
    let confirm=window.confirm("voulez-vous effectivement rendre le personnel matricule "+username+" administrateur ?");
    if ( confirm == true){
    let url="/addRoleAdmin/"
    this.usersService.getRessource(url+username)
    .subscribe(data=>{
      //this.message=data;
      alert("L'utilisateur matricule "+username+" est désormais administrateur !");
      this.reloadPage();
    }, err=>{
      alert(err.error.message);
     // console.log(err);
    })
    }
  }
  onsetChefRole(username){
    let confirm=window.confirm("voulez-vous effectivement rendre le personnel matricule "+username+" chef ?");
    if ( confirm == true){
    let url="/addRoleChef/"
    this.usersService.getRessource(url+username)
    .subscribe(data=>{
      //this.message=data;
      alert("L'utilisateur matricule "+username+" est désormais chef !");
      this.reloadPage();
    }, err=>{
      alert(err.error.message);
     // console.log(err);
    })
    }
  }

  setSecretaireRole(username){
    let confirm=window.confirm("voulez-vous effectivement rendre le personnel matricule "+username+" secretaire ?");
    if ( confirm == true){
    let url="/addRoleSecretaire/"
    this.usersService.getRessource(url+username)
    .subscribe(data=>{
      //this.message=data;
      alert("L'utilisateur matricule "+username+" est désormais secretaire !");
      this.reloadPage();
    }, err=>{
      alert(err.error.message);
      //console.log(err.error.message);
    })
    }
  }
  onsetUserRole(username){
    let confirm=window.confirm("voulez-vous effectivement rendre le personnel matricule "+username+" utilisateur ?");
    if ( confirm == true){
    let url="/addRoleUser/"
    this.usersService.getRessource(url+username)
    .subscribe(data=>{
      //this.message=data;
      alert("L'utilisateur matricule "+username+" est désormais utilisateur !");
      this.reloadPage();
    }, err=>{
      alert(err.error.message);
      //console.log(err.error.message);
    })
    }
  }

  getUser(matricule){
  	let url="/Utilisateur/"+matricule;
  	this.usersService.getRessource(url)
  	.subscribe(data =>{
      this.mode=2;
  		this.user=data;
  	}, err =>{
      alert(err.error.message);
  	})
  }


  onRetour(){
  	this.mode=1
  }

  reloadPage() {
    window.location.reload();
  }

}
