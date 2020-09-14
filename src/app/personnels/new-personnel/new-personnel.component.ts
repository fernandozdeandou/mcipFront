import { Component, OnInit } from '@angular/core';
import { Personnel } from 'src/app/models/model.personnel';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelsService } from 'src/app/_services/personnels.service';

@Component({
  selector: 'app-new-personnel',
  templateUrl: './new-personnel.component.html',
  styleUrls: ['./new-personnel.component.css']
})
export class NewPersonnelComponent implements OnInit {

  public personnel:Personnel=new Personnel();
  public mode:number=1;
  public currentPerso;
  private mat;

  constructor(public route: ActivatedRoute,
  	          public personnelsService: PersonnelsService,
              public router:Router) { }

  ngOnInit() {
  }
  onConfirmer(dataForm){
    this.mode=2;
    this.personnel=dataForm;
    this.mat=dataForm.matricule;
  }

  onSavePersonnel(){
  	this.personnelsService.savePersonnel(this.personnel)
  	.subscribe(data=>{
      this.currentPerso=data;
  		alert("Personnel enregistré avec success");
      let url=btoa("http://localhost:8080/mcip/personnel/detailPersonnel/"+this.currentPerso.matricule);
      this.router.navigateByUrl("detail-personnel/"+url);
  	}, err=>{
      alert(err.error.message);
      if(err.error.message=="Le personnel ayant le matricule N°"+this.mat+" est déjà enrégistré s'il vous plait!"){
      let url=btoa("http://localhost:8080/mcip/personnel/detailPersonnel/"+this.mat);
      this.router.navigateByUrl("detail-personnel/"+url);
    }
  	});	
  }


}
