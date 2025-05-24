import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  imports: [FormsModule, CommonModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss',
})
export class SinglefruitComponent {
  @Input() fruit: Fruit = {
    name: 'Apfel',
    img: 'apple.png',
    description:
      'Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.',
    genus: 'Kernobstgewächsen innerhalb der Familie der Rosengewächse',
    stars: 2.3,
    reviews: [
      { name: 'Kevin W.', text: 'ist lecker' },
      { name: 'Arne P.', text: 'nicht so meins' },
    ],
    liked: false,
  };

  inputData = '';

  @Output() fruitname = new EventEmitter<string>();

  sendInputData() {
    this.fruitname.emit(this.inputData);
    this.inputData = '';
  }

  toggleHeartIcon(heart: HTMLImageElement, fruit: Fruit) {
    switch (fruit.liked) {
      case true:
        heart.src = './assets/img/heart-empty.png';
        fruit.liked = false;
        break;

      default:
        heart.src = './assets/img/heart-filled.png';
        fruit.liked = true;
        break;
    }
  }
}

interface Fruit {
  name: string;
  img: string;
  description: string;
  genus: string;
  stars: number;
  reviews: {
    name: string;
    text: string;
  }[];
  liked: boolean;
}
