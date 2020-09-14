import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnel } from '../models/model.personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelsService {

  public host:string="http://localhost:8080/mcip/personnel";

  constructor(private http:HttpClient) { }

  public getRessource(url){ 
  	return this.http.get(this.host+url);
  }
  savePersonnel(personnel:Personnel){
        return this.http.post(this.host+"/personnel", personnel);
  }
  public getRessource2(url){ 
  	return this.http.get(url);
  }
  uploadPhoto(file: File, matriculePerso:string, url): Observable<HttpEvent<{}>>{
  	let formdata: FormData = new FormData();
  	formdata.append('file', file);
  	const req = new HttpRequest('POST', this.host+url+matriculePerso, formdata, {
  		reportProgress: true,
  		responseType: 'text'	
  	});
  	return this.http.request(req);
  }
}
