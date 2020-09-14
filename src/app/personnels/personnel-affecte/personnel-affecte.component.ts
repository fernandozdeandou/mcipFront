import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelsService } from 'src/app/_services/personnels.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-personnel-affecte',
  templateUrl: './personnel-affecte.component.html',
  styleUrls: ['./personnel-affecte.component.css']
})
export class PersonnelAffecteComponent implements OnInit {

  public currentPage:number=0;
  public size:number=5;
	public personnels:any;
	public title;
  public pages;
  public matricule;
  public currentPersonnel;
  public mode:number;
  public message;

  constructor(private route: ActivatedRoute,
  	          private router: Router,
              public personnelService:PersonnelsService,
              public authService:AuthService) { }

  ngOnInit() {
    this.mode=1;
    this.title="Liste du personnel affecté";
		this.getPersonnels('/ListerPersonnelAffecte');
    
}
private getPersonnels(url){
  	this.personnelService.getRessource(url+'?page='+this.currentPage+'&size='+this.size)
  	.subscribe(data=>{
  		this.personnels=data;
      this.pages=new Array(this.personnels.totalPage);
     
  	}, err=>{
  		console.log(err);
  	})
  }
  onGetDetailPersonnel(p){
    let url=btoa("http://localhost:8080/mcip/personnel/detailPersonnel/"+p.matricule);
     this.router.navigateByUrl("detail-personnel/"+url);
 }
 reloadPage() {
  window.location.reload();
  }
 gotoPage(i:number){
    this.currentPage=i;
    this.getPersonnels('/ListerPersonnelAffecte');
    //this.reloadPage();
  }
  chercherParMatricule(matricule:string){
    this.matricule=matricule; 
    this.mode=2;
    this.title="personnel recherché";
    this.getPersonnel();
     }
  private getPersonnel(){
    this.personnelService.getRessource('/detailPersonnel/'+this.matricule)
    .subscribe(data=>{
      this.currentPersonnel=data;
    }, err=>{
      alert(err.error.message)
      console.log(err);
    })
  }

  onOperationnel(p){
  let confirm=window.confirm("voulez-vous effectivement rendre opérationnel "+p.nomPrenom+"?");
    if ( confirm == true){
    let url="/mettrePersonnelOperationnel/"
    this.personnelService.getRessource(url+p.matricule)
    .subscribe(data=>{
      this.message=data;
      alert(p.nomPrenom+" désormais opérationnel !");
      this.reloadPage();
    }, err=>{
      console.log(err);
    })
    }
  }
  onConge(p){
    let confirm=window.confirm("voulez-vous effectivement mettre "+p.nomPrenom+" en congé ?");
    if ( confirm == true){
    let url="/mettrePersonnelEnConge/"
    this.personnelService.getRessource(url+p.matricule)
    .subscribe(data=>{
      this.message=data;
      alert(p.nomPrenom+" désormais en congé !");
      this.reloadPage();
    }, err=>{
      console.log(err);
    })
    }
  }
  onMalade(p){
    let confirm=window.confirm("voulez-vous effectivement rendre "+p.nomPrenom+" malade ?");
    if ( confirm == true){
    let url="/mettrePersonnelMalade/"
    this.personnelService.getRessource(url+p.matricule)
    .subscribe(data=>{
      this.message=data;
      alert(p.nomPrenom+" désormais Malade !");
      this.reloadPage();
    }, err=>{
      console.log(err);
    })
    }
  }
  onPermissionnaire(p){
    let confirm=window.confirm("voulez-vous effectivement rendre "+p.nomPrenom+" permissionnaire ?");
    if ( confirm == true){
    let url="/mettrePersonnelEnPermission/"
    this.personnelService.getRessource(url+p.matricule)
    .subscribe(data=>{
      this.message=data;
      alert(p.nomPrenom+" désormais permissionnaire !");
      this.reloadPage();
    }, err=>{
      console.log(err);
    })
    }
  }
  onAffecter(p){
    let confirm=window.confirm("voulez-vous effectivement affecter "+p.nomPrenom+" ?");
    if ( confirm == true){
    let url="/affecterPersonnel/"
    this.personnelService.getRessource(url+p.matricule)
    .subscribe(data=>{
      this.message=data;
      alert(p.nomPrenom+" désormais affecté !");
      this.reloadPage();
    }, err=>{
      console.log(err);
    })
    }
  }
}
