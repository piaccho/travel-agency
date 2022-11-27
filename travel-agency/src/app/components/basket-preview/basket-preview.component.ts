import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Tour } from 'src/app/interfaces/tour';

@Component({
  selector: 'app-basket-preview',
  templateUrl: './basket-preview.component.html',
  styleUrls: ['./basket-preview.component.css']
})
export class BasketPreviewComponent implements OnInit
 {
  @Input() inputBasket!: [Tour, number][]
  @Output() openBasketViewFlag = new EventEmitter<boolean>();

  constructor() { 
  }

  ngOnInit(): void {

  }

  openBasketView() {
    this.openBasketViewFlag.emit(false)
  }

}
