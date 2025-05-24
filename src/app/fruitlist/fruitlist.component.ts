import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss',
})
export class FruitlistComponent {
  fruitlistdata = inject(FruitlistdataService);

  addComment(comment: string, index: number) {
    this.fruitlistdata.handleAddComment(comment, index);
  }

  getRatingColor(stars: number): string {
    let ratingColor = stars < 3 ? 'fontColorBad' : 'fontColorGood';
    return ratingColor;
  }
}
