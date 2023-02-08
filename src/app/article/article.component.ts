import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../interfaces/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() article: Article = {
    title: '',
    content: '',
    color: '',
    isSelected: false
  };
  @Output() selectEmitter = new EventEmitter();

  setColor() {
    this.selectEmitter.emit(this.article.color);
  }

  getStyle(): any {
    if (this.article.isSelected) {
      return {border: `1px solid ${this.article.color}`,
              'border-radius': '10px',
              'box-shadow': `5px 10px ${this.article.color}`
      }
    } else {
      return {}
    }
  }

  getButtonStyle() {
    return {
      backgroundColor: this.article.color,
      'box-shadow': `5px ${this.article.color}`
    }
  }
}
