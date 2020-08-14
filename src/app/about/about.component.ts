import { Component, OnInit } from '@angular/core';
import {Aboutservice} from '../../services/about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  info = {
    nom: 'souna',
    email: 'souna@yahoo.fr',
    tel: 22038820
  }
  comments = [
    {date: new Date(), message: 'A'},
    {date: new Date(), message: 'B'},
    {date: new Date(), message: 'C'}
  ]
  commentaire = {date:'', message: ''}
  infos:any;
  comms:[];
  constructor(private aboutservice:Aboutservice) {
   this.infos=aboutservice.getinfo();

  }

comm(){

    this.comments.push({date:new Date(),message:this.commentaire.message});
  this.commentaire.message='';
}
  color='red';
  colorer(select) {
    this.color = select;
  }
}
