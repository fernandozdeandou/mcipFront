import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthService } from 'src/app/_services/auth.service';
import { MentionsService } from 'src/app/_services/mentions.service';


@Component({
  selector: 'app-page-mentions',
  templateUrl: './page-mentions.component.html',
  styleUrls: ['./page-mentions.component.css']
})
export class PageMentionsComponent implements OnInit {
  public currentNumeroMention;
  public	pageMentions:any;
  public	currentPage:number=0;
  public	size:number=7;
  public	pages:Array<number>;
  public tableauObservation=[];
  public mode=1;
  isLoggedIn = false;
  public currentMention;
  public title:string;
  public listeMention;
  public observation;
  public observationVide=[
  {idObservation:0, message:null  }
  ];
  
    constructor(public route: ActivatedRoute,
                public mentionService:MentionsService,
                public tokenStorageService:TokenStorageService,
                public router:Router,
                public authSercice: AuthService) { }
  
    ngOnInit() {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
      this.initMentions();
      
     
    }
  
    initMentions(){
      this.mode=1;
      this.mentionService.getMentions( this.currentPage, this.size)
      .subscribe(data =>{
        this.title="Liste de toutes les mentions de la MCIP par page";
        this.pageMentions=data;
        this.pages=new Array(this.pageMentions.totalPage);
      }, err =>{
        console.log(err);
      })
    }
    gotoPage(i:number){
      this.currentPage=i;
      this.initMentions();
    }
    chercherNumero(id:number){
      this.mentionService.getMention(id)
      .subscribe(data =>{
        this.currentMention=data; 
        this.title="Informations concernant la mention numéro: "+id;
        this.mode=2;
        
      }, err =>{
        alert(err.error.message);
      })
     }
     chercherDate(date:Date){
      this.mentionService.getMentionsDate(date)
      .subscribe(data =>{
        this.listeMention=data;
        if(this.listeMention.length==0){
          alert(" Aucune mention n'a été enrégistrée pour date du "+date);
          this.mode=1;
        } else{
          this.title="Liste de toutes les mentions du "+date;
          this.mode=3;
        } 
      }, err =>{
         alert("Vérifiez que la date saisie  est correcte. Si tel est le cas, alors il n'existent pas de mentions pour cette date");
        console.log(err);
      })
     }
     onRetour(){
      this.currentMention=null
       this.mode=1;
     } 
     onObservation(id:number){
       this.router.navigate(['observation',id]);
     }
}
