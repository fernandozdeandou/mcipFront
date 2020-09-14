import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public host:string="http://localhost:8080/mcip/users";


  constructor(private http:HttpClient) { }


  getUsers(){
		return this.http.get(this.host+"/listeUtilisateur");
  	
  }
  public getRessource(url){ 
  	return this.http.get(this.host+url);
  }
}
