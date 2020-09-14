import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormEvent} from '../models/model.formEvent';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  public host:string="http://localhost:8080/mcip/event";

  constructor(private http:HttpClient) { }

  public getRessource(url){ 
  	return this.http.get(this.host+url);
  }
  saveEvenement(formEvent:FormEvent){
  	console.log(formEvent);
        return this.http.post(this.host+"/evenements", formEvent);
  }
}
