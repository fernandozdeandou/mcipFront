import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuspectService } from 'src/app/_services/suspect.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-info-susp-cni',
  templateUrl: './info-susp-cni.component.html',
  styleUrls: ['./info-susp-cni.component.css']
})
export class InfoSuspCniComponent implements OnInit {
  public numeroCni;
  public suspect;
  public message;
  public timeStamp;
  public title;

  constructor( public activatedRoute:ActivatedRoute,
    public router:Router,
    public suspectService: SuspectService,
    public authService:AuthService) { 
this.numeroCni=activatedRoute.snapshot.params['cni'];
}
ngOnInit() {
this.title="Informations concernant le suspect ayant la CNI N°:"+this.numeroCni;
this.suspectService.getRessource("/infosSuspectParNumeroCni/"+this.numeroCni).subscribe(data=>{
this.suspect=data;
}, err=>{
console.log(err);
 })
}
onGetDetailSuspect(s){
  let url=btoa("http://localhost:8080/mcip/suspect/infosSuspect/"+s.idSuspect);
   this.router.navigateByUrl("details-suspect/"+url);
}

onRelaxerSuspect(s){
let confirm=window.confirm("voulez-vous effectivement relaxer"+s.nomPrenom+"?");
  if ( confirm == true){
  let url="http://localhost:8080/mcip/suspect/relaxerLeSuspect/";
  this.suspectService.getRessource2(url+s.idSuspect)
  .subscribe(data=>{
    this.message=data;
    // alert("suspect "+s.nomPrenom+" effectivement relaxé!");
     this.reloadPage();
  }, err=>{
    alert(err.error.message);
  });
}
}
onRechercherSuspect(s){
 let confirm=window.confirm("voulez-vous effectivement rechercher "+s.nomPrenom+" ?");
  if ( confirm == true){
 let url="http://localhost:8080/mcip/suspect/rechercherLeSuspect/";
  this.suspectService.getRessource2(url+s.idSuspect)
  .subscribe(data=>{
    this.message=data;
   // alert("suspect"+s.nomPrenom+" est désormais rechercher !");
    this.reloadPage();
  }, err=>{
    alert(err.error.message);
  });
}
}
onDefererSuspect(s){
 let confirm=window.confirm("voulez-vous effectivement déférer "+s.nomPrenom+"?");
  if ( confirm == true){
 let url="http://localhost:8080/mcip/suspect/defererLeSuspect/";
  this.suspectService.getRessource2(url+s.idSuspect)
  .subscribe(data=>{
    this.message=data;
    console.log(data);
    //alert("défèrement de "+s.nomPrenom+" effectué avec succès!");
    this.reloadPage();
  }, err=>{
    //alert(err.error.message);
    this.reloadPage();
  });
}
}
onEcrouerSuspect(s){
 let confirm=window.confirm("voulez-vous effectivement garder à vue"+s.nomPrenom+"?");
  if ( confirm == true){
 let url="http://localhost:8080/mcip/suspect/garderAvueLeSuspect/"
  this.suspectService.getRessource2(url+s.idSuspect)
  .subscribe(data=>{
    this.message=data;
   //alert(s.nomPrenom+" garder à vue avec succès!");
    this.reloadPage();
  }, err=>{
    alert(err.error.message);
  });
}
}
onRetourSuspects(){
  this.router.navigateByUrl("/suspects");
}


 getTS(){
   //return Date.now();
   return this.timeStamp;
 }
 
  reloadPage() {
   window.location.reload();
 }
}

  


