import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelsService } from 'src/app/_services/personnels.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-detail-personnel',
  templateUrl: './detail-personnel.component.html',
  styleUrls: ['./detail-personnel.component.css']
})
export class DetailPersonnelComponent implements OnInit {

  public personnel;
  public timeStamp:number=0;
  public editPhoto;
  public selectedFile;
  public progress: number;
  public currentFileUpload: any;

  constructor(private route: ActivatedRoute,
  	          private router: Router,
              public personnelService: PersonnelsService,
              public authService:AuthService) { }

  ngOnInit() {
  	let url=atob(this.route.snapshot.params.url);
  	this.personnelService.getRessource2(url).subscribe(data=>{
  		this.personnel= data;
  	})
  }
  getTS(){
    //return Date.now();
    return this.timeStamp;
  }
  onEditPhoto(){
    this.editPhoto=true;
  }
  onSelectedFile(event){
    this.selectedFile=event.target.files;
  }
  uploadPhotoPersonnel(){
    this.progress=0;
    this.currentFileUpload = this.selectedFile.item(0);
    this.personnelService.uploadPhoto(this.currentFileUpload, this.personnel.matricule,'/uploadPhotoProfilPerso/').subscribe(event =>{
      if (event.type===HttpEventType.UploadProgress){
        this.progress = Math.round(100*event.loaded/event.total);
      }else if (event instanceof HttpResponse){
        console.log(this.progress);
         alert("fin du téléchargement...")
         this.timeStamp=Date.now();
         this.editPhoto=false;
      }
    }, err=>{
      alert("Problème de chargement")
    })
  }
  retourListPersonnel(){
    this.router.navigateByUrl("/personnels");
  }

}