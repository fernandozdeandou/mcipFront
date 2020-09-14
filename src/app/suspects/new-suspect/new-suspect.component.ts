import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuspectService } from 'src/app/_services/suspect.service';
import { Suspect } from 'src/app/models/model.suspect';

@Component({
  selector: 'app-new-suspect',
  templateUrl: './new-suspect.component.html',
  styleUrls: ['./new-suspect.component.css']
})
export class NewSuspectComponent implements OnInit {
  public suspect:Suspect=new Suspect();
  public mode:number=1;
  public currentSusp;
  private numeroCni;

  constructor(public route: ActivatedRoute,
  	          public suspectService: SuspectService,
              public router:Router) { }

  ngOnInit() {
  }
  onConfirmer(dataForm){
    this.mode=2;
    this.suspect=dataForm;
    this.numeroCni=dataForm.numeroCni;
  }

  onSaveSuspect(){
  	this.suspectService.saveSuspect(this.suspect)
  	.subscribe(data=>{
      this.currentSusp=data;
      alert("Suspect enregistré avec success");
      let url=btoa("http://localhost:8080/mcip/suspect/infosSuspect/"+this.currentSusp.idSuspect);
      this.router.navigateByUrl("details-suspect/"+url);
  	}, err=>{
      console.log(err);
      alert(err.error.message);
      if(err.error.message=="Le suspect ayant la CNI N°"+this.numeroCni+" est déjà enrégistré s'il vous plait!"){
        this.suspectService.getRessource("/infosSuspectParNumeroCni/"+this.numeroCni)
        .subscribe(data=>{
        this.currentSusp=data;
        let url=btoa("http://localhost:8080/mcip/suspect/infosSuspect/"+this.currentSusp.idSuspect);
        this.router.navigateByUrl("details-suspect/"+url);
          }, err=>{
          console.log(err.error.message);
           })
          }
  	});	
  }
}
