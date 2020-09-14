import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Mention} from '../models/model.mention';
import {Observation} from '../models/model.observation';


@Injectable({
  providedIn: 'root'
})
export class MentionsService {

  public host:string="http://localhost:8080/mcip/mention";
  

  constructor(private http:HttpClient) { }


  getMentions(page:number, size:number){
		return this.http.get(this.host+"/mentions?page="+page+"&size="+size);
	}
	getMention(numeroMention:number){
		return this.http.get(this.host+"/infosMention/"+numeroMention);
	}

	getMentionsDate(dateMention){
		return this.http.get(this.host+"/ListerMentionParDate?dateMention="+dateMention);
	}
	saveMention(mention:Mention){
        return this.http.post(this.host+"/mentions", mention);
	}
	faireObservation(id:number,observation:Observation){
		return this.http.post(this.host+"/faireObservation/"+id, observation);
	}
}
