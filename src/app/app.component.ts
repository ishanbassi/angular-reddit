import { Component } from '@angular/core';
import Article from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[]

  constructor() {
    this.articles = [
      new Article(
        'Angular',
        'http://angular.io',
        10
      ),
      new Article(
        'React',
        'http://reactjs.con',
        12
      ),new Article(
        'Django',
        'http://django.com',
        8
      )
    ]
  }

  addArticle(title:HTMLInputElement, link:HTMLInputElement) {
    this.articles.push(
      new Article(title.value,link.value)
    )
    title.value  = ''; link.value = ''
    return false
  }
  sortedArticle() {
    return this.articles.sort((a,b) => b.votes - a.votes)
  }
  
}
