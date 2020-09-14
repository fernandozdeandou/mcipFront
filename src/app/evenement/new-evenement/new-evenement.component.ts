import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EvenementService } from 'src/app/_services/evenement.service';
import { FormEvent } from 'src/app/models/model.formEvent';

@Component({
  selector: 'app-new-evenement',
  templateUrl: './new-evenement.component.html',
  styleUrls: ['./new-evenement.component.css']
})
export class NewEvenementComponent implements OnInit {

  public formEvent:FormEvent=new FormEvent();
  public mode:number=1;
  public currentEvent;

  constructor(public route: ActivatedRoute,
  	          public evenementService:EvenementService,
              public router:Router) { }

  ngOnInit() {
  }
  onConfirmer(dataForm){
    this.mode=2;
    this.formEvent=dataForm;
    console.log(this.formEvent);
  }

  onSaveEvenement(){
  	this.evenementService.saveEvenement(this.formEvent)
  	.subscribe(data=>{
      this.currentEvent=data;
      console.log(this.currentEvent);
  		alert("Evenement enregistré avec success");
     // this.router.navigate(['mentions']);
      this.router.navigateByUrl("/evenements");
  	}, err=>{
      console.log(err);
  		alert("Une erreur est survenue lors de l'enregistrement de l'évènement");
  	})	
  }


}
