import { Component, OnInit, Host } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class:'row'
  }
})

export class ArticleComponent implements OnInit {
  title:string;
  link:string;
  votes;

  constructor() {
    this.title='Angular 2'
    this.link='https://angular.io';
    this.votes=3;
   }

  ngOnInit(): void {
  }
  voteUP(){
    this.votes++;

  }
  voteDown(){
    this.votes--;
    if(this.votes<=0){
      this.votes=0;
    }
  }

}
