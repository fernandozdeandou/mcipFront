import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from 'src/app/_services/evenement.service';

@Component({
  selector: 'app-all-evenements',
  templateUrl: './all-evenements.component.html',
  styleUrls: ['./all-evenements.component.css']
})
export class AllEvenementsComponent implements OnInit {

  public currentPage:number=0;
	public size:number=7;
	public pageEvenement;
	public pages;
	public mode; 
	public event;

  constructor(public route: ActivatedRoute,
  	          public evenementService:EvenementService,
              public router:Router) { }

  ngOnInit() {
  	this.initEvenement();
  }
  private initEvenement(){
  	this.mode=1;
  	let url="/evenements?page="+this.currentPage+"&size="+this.size;
  	this.evenementService.getRessource(url)
  	.subscribe(data =>{
  		this.pageEvenement=data;
  		this.pages=new Array(this.pageEvenement.totalPages);
  	}, err =>{
  		console.log(err);
  	})
  }
  gotoPage(i:number){
  	this.currentPage=i;
  	this.ngOnInit();
  }
  chercherEvenement(idEvent:number){
  	this.mode=2;
  	let url="/infosEvenement/"+idEvent;
  	this.evenementService.getRessource(url)
  	.subscribe(data =>{
  		this.event=data;  
  	}, err =>{
  		console.log(err);
  	})
  }
  onRetour(){
  	this.mode=1
  }
  onGetPersonnel(matricule){
    let url=btoa("http://localhost:8080/mcip/personnel/detailPersonnel/"+matricule);
    this.router.navigateByUrl("detail-personnel/"+url);
  }

}
