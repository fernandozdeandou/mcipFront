import { Component, OnInit } from '@angular/core';
import { Observation } from 'src/app/models/model.observation';
import { ActivatedRoute, Router } from '@angular/router';
import { MentionsService } from 'src/app/_services/mentions.service';

@Component({
  selector: 'app-observation-mention',
  templateUrl: './observation-mention.component.html',
  styleUrls: ['./observation-mention.component.css']
})
export class ObservationMentionComponent implements OnInit {

  numeroMention;
	observation:Observation=new Observation();
  mode:number=1;

  constructor( public activatedRoute:ActivatedRoute,
  	           public mentionService:MentionsService,
  			       public router:Router) { 
  	this.numeroMention=activatedRoute.snapshot.params['id'];
}

  ngOnInit() {
  }
  onConfirmer(dataForm){
    this.mode=2;
    this.observation=dataForm;
  }
  onFaireObservation(){
  	this.mentionService.faireObservation(this.numeroMention,this.observation)
  	.subscribe(data=>{
      //this.currentMention=data;
      console.log(data);
  		alert("Observation effectuée avec success");
      this.router.navigate(['pagementions']);
  	}, err=>{
      console.log(err);
  		alert("Une erreur est survenue lors de l'enregistrement de l'observation");
  	})	
  }
  onAnnuler(){
  	this.router.navigate(['pagementions']);
  }

}
