import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  constructor() { }
  listeEmploi!:Emploi[]
  nbreOffre!:number
    ngOnInit(): void {

      this.listeEmploi =[
        {
          reference:"1",
          titre:"Developpeur",
          entreprise:"Be-softilys",
          etat:true
        },
        {
          reference:"2",
          titre:"QA",
          entreprise:"NeoXam",
          etat:false
        }
      ]
  }

  calcul(){
    this.nbreOffre=0;
    // for (let i = 0; i < this.listeEmploi.length; i++) {
    //   if(this.listeEmploi[i].etat==true){
    //     this.nbreOffre++;
    //   }   
    // }
    // this.nbreOffre=this.listeEmploi.filter(e=>e.etat==true).length;
    this.listeEmploi.map(e=>e.etat==true&&this.nbreOffre++);

  }

}
