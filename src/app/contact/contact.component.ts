import { Component, OnInit } from '@angular/core';
import {Aboutservice} from '../../services/about.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {

  }
  comment = [];
  commentaire = {id:0,messages:''};
  com(){

   this.comment.push({id:this.commentaire.id,messages:this.commentaire.messages});
   this.commentaire.messages ='';
    this.commentaire.id+=1;
  }

  ngOnInit(): void {
  }

}
