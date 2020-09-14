import { Component, OnInit } from '@angular/core';
import { Mention } from 'src/app/models/model.mention';
import { ActivatedRoute, Router } from '@angular/router';
import { MentionsService } from 'src/app/_services/mentions.service';

@Component({
  selector: 'app-new-mention',
  templateUrl: './new-mention.component.html',
  styleUrls: ['./new-mention.component.css']
})
export class NewMentionComponent implements OnInit {

  mention:Mention=new Mention();
  mode:number=1;
  currentMention;
  private defaulTitre:string="saisir le titre";

  constructor(public route: ActivatedRoute,
  	          public mentionService:MentionsService,
              public router:Router) { }

  ngOnInit() {
  }
  onConfirmer(dataForm){
    this.mode=2;
    this.mention=dataForm;
  }

  onSaveMention(){
  	this.mentionService.saveMention(this.mention)
  	.subscribe(data=>{
      this.currentMention=data;
  		alert("Mention enregistrée avec success");
      this.router.navigate(['pagementions']);
  	}, err=>{
      console.log(err);
  		alert("Une erreur est survenue lors de l'enregistrement de la mention");
  	})	
  }
 

}
