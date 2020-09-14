import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuspectService } from 'src/app/_services/suspect.service';
import { MentionsService } from 'src/app/_services/mentions.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-suspects-garderavue',
  templateUrl: './suspects-garderavue.component.html',
  styleUrls: ['./suspects-garderavue.component.css']
})
export class SuspectsGarderavueComponent implements OnInit {
  public suspects;
  public title:string;
  private message;
  private timeStamp:number=0;
  private urlmc;
  public suspect=undefined;
  public mode;
  public inRecherche:boolean;
  private test;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public suspectService: SuspectService,
    private mentionService: MentionsService,
    public authService:AuthService) { }
ngOnInit(): void {
this.mode=1;
this.suspect=undefined;
this.inRecherche=false;
this.title="Liste des suspects gardés à vue";
this.urlmc="/suspectsGarderAvue";
this.getSuspects(this.urlmc);
}

chercherMotCle(mc:string){
this.urlmc="/listSuspectParNom/"+mc;
// this.getSuspects(this.urlmc);
this.suspectService.getRessource(this.urlmc)
.subscribe(data=>{
this.test=data;
if(this.test.length == 0) {
alert("Aucun suspect contenant le mot clé "+mc+" retrouvé!");
}
else{
this.mode=1;
this.inRecherche=true;
this.title="Liste de tout les suspects contenant le mot clé "+mc;
this.suspects=this.test;
// console.log(this.test);

}

}, err=>{
alert(err.error.message);
//console.log(err);
})
}
chercherNumeroCni(cni:string){
// this.router.navigate(['info_susp_cni',cni]);

this.title="Suspect ayant la CNI N°:"+ cni;
this.suspectService.getRessource("/infosSuspectParNumeroCni/"+cni).subscribe(data=>{
this.suspect=data;
this.mode=2;
this.inRecherche=true;
}, err=>{
alert(err.error.message);    
// console.log(err);
});
}


private getSuspects(url){
this.suspectService.getRessource(url)
.subscribe(data=>{
this.suspects=data;
console.log(this.suspects)
}, err=>{
alert(err.error.message);
//console.log(err);
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
this.suspect=undefined;
this.ngOnInit();
}
onRetourListeSusp(){
  this.router.navigateByUrl("/suspects");

}


getTS(){;
return this.timeStamp;
}

reloadPage() {
window.location.reload();
}

}

