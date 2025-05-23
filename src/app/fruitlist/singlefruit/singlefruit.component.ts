import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singlefruit',
  imports: [],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
  @Input("testNumber")fruitnumber = 0;
}
