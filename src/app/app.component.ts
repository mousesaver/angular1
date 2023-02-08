import { Component } from '@angular/core';
import { Article } from './interfaces/article.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, earum.',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis possimus ex distinctio tempora minima quia autem vitae necessitatibus rem, unde accusamus culpa similique, fugiat est asperiores nihil doloribus atque consequuntur at omnis molestias odit amet? Iste, magni voluptatem? Ducimus quos magni doloribus enim consequuntur natus reprehenderit. Est nostrum sequi facere magnam explicabo deleniti accusantium nam alias, reiciendis velit dicta asperiores?',
      color: 'blue',
      isSelected: false
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, earum.',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis possimus ex distinctio tempora minima quia autem vitae necessitatibus rem, unde accusamus culpa similique, fugiat est asperiores nihil doloribus atque consequuntur at omnis molestias odit amet? Iste, magni voluptatem? Ducimus quos magni doloribus enim consequuntur natus reprehenderit. Est nostrum sequi facere magnam explicabo deleniti accusantium nam alias, reiciendis velit dicta asperiores?',
      color: 'black',
      isSelected: false
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, earum.',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis possimus ex distinctio tempora minima quia autem vitae necessitatibus rem, unde accusamus culpa similique, fugiat est asperiores nihil doloribus atque consequuntur at omnis molestias odit amet? Iste, magni voluptatem? Ducimus quos magni doloribus enim consequuntur natus reprehenderit. Est nostrum sequi facere magnam explicabo deleniti accusantium nam alias, reiciendis velit dicta asperiores?',
      color: 'red',
      isSelected: false
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, earum.',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis possimus ex distinctio tempora minima quia autem vitae necessitatibus rem, unde accusamus culpa similique, fugiat est asperiores nihil doloribus atque consequuntur at omnis molestias odit amet? Iste, magni voluptatem? Ducimus quos magni doloribus enim consequuntur natus reprehenderit. Est nostrum sequi facere magnam explicabo deleniti accusantium nam alias, reiciendis velit dicta asperiores?',
      color: 'green',
      isSelected: false
    }
  ]
  themeColor: string = 'black';

  updateArticles(color: string) {
    this.articles.forEach((article) => {
      if (article.color === color) {
        article.isSelected = true;
      } else {
        article.isSelected = false;
      }
    })
    this.themeColor = color;
  }
}
