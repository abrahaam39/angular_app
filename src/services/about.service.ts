import {Injectable} from '@angular/core';
@Injectable()
export class Aboutservice{
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

  getcomments(){
    return this.comments;
  }
  getinfo(){
    return this.info;
  }
}
