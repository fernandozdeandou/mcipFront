import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuspectService } from 'src/app/_services/suspect.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-details-suspect',
  templateUrl: './details-suspect.component.html',
  styleUrls: ['./details-suspect.component.css']
})
export class DetailsSuspectComponent implements OnInit {

  private editPhoto1: boolean;
  private editPhoto2: boolean;
  private editPhoto3: boolean;
  public suspect: any;
  private selectedFile;
  private progress: number;
  private currentFileUpload: any;
  timeStamp:number=0;
  private message;
  private adEvent;

  constructor(private route: ActivatedRoute,
  	          private router: Router,
              public suspectService: SuspectService,
              public authService:AuthService) { }

  ngOnInit() {
  	let url=atob(this.route.snapshot.params.url);
  	this.suspectService.getRessource2(url).subscribe(data=>{
  		this.suspect= data;
  	})
  }
  addEvent(){
    this.adEvent=true;
  }
  onAddEvent(idEvent:number){
    let url="/ajouterEvenement?idSuspect="+this.suspect.idSuspect+"&idEvenement="+idEvent;
    this.suspectService.getRessource(url).subscribe(data=>{
      console.log(data);
      alert("Evenement ajouté avec success");
      this.ngOnInit();
      this.adEvent=undefined;
    }, err =>{
      alert(err.error.message);
      this.adEvent=undefined;
    })
  }
  onEditPhoto1(suspect){
    this.suspect=suspect;
    this.editPhoto1=true;
    
  }
  onEditPhoto2(suspect){
    this.suspect=suspect;
    this.editPhoto2=true;
  }
  onEditPhoto3(suspect){
    this.suspect=suspect;
    this.editPhoto3=true;
  }
  onSelectedFile(event){
    this.selectedFile=event.target.files;
  }
  uploadPhotoEntiere(){
    this.uploadPhotoSus("/uploadPhotoEntiere/");
    this.editPhoto1=false;
  }
  uploadPhotoProfilSusp(){
    this.uploadPhotoSus("/uploadPhotoProfil/");
    this.editPhoto3=false;
  }
  uploadPhotoFaceSusp(){
    this.uploadPhotoSus("/uploadPhotoFace/");
    this.editPhoto2=false;
  }

 private  uploadPhotoSus(url){
    this.progress=0;
    this.currentFileUpload = this.selectedFile.item(0);
    this.suspectService.uploadPhoto(this.currentFileUpload, this.suspect.idSuspect, url).subscribe(event =>{
      if (event.type===HttpEventType.UploadProgress){
        this.progress = Math.round(100*event.loaded/event.total);
      }else if (event instanceof HttpResponse){
        console.log(this.progress);
         alert("fin du téléchargement...")
         this.timeStamp=Date.now();
      }
      
    }, err=>{
      alert("Problème de chargement")
    })

  }
  getTS(){
    //return Date.now();
    return this.timeStamp;
  }
  onRelaxer(suspect){
    let url="http://localhost:8080/mcip/suspect/relaxerLeSuspect/"
    this.suspectService.getRessource2(url+suspect.idSuspect)
    .subscribe(data=>{
      this.message=data;
    }, err=>{
      console.log(err);
    })
  }
  onDeferer(suspect){
    let url="http://localhost:8080/mcip/suspect/defererLeSuspect/"
    this.suspectService.getRessource2(url+suspect.idSuspect).subscribe(data=>{
      this.message=data;
    }, err=>{
      console.log(err);
    })
  }
  onGarderAvue(suspect){
    let url="http://localhost:8080/mcip/suspect/garderAvueLeSuspect/"
    this.suspectService.getRessource2(url+suspect.idSuspect).subscribe(data=>{
      this.message=data;
    }, err=>{
      console.log(err);
    })
  }
  onRechercher(suspect){
    let url="http://localhost:8080/mcip/suspect/rechercherLeSuspect/"
    this.suspectService.getRessource2(url+suspect.idSuspect)
    .subscribe(data=>{
      this.message=data;
    }, err=>{
      console.log(err);
    })
  }
  onRetourListeSusp(){
    this.router.navigateByUrl("/suspects");

  }
  onGetDetailPersonnel(matricule){
    let url=btoa("http://localhost:8080/mcip/personnel/detailPersonnel/"+matricule);
     this.router.navigateByUrl("detail-personnel/"+url);
 }

}
