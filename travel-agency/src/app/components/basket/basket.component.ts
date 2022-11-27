import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tour } from 'src/app/interfaces/tour';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  @Input() inputBasket!: Tour[]
  @Output() openMainViewFlag = new EventEmitter<boolean>();
  betterBasket: [Tour, number][] = []
  sumPrice!: number

  constructor() { }

  ngOnInit(): void {
    this.sumPrice = this.inputBasket.reduce((acc: number, curr: Tour) => {
      return acc + curr.price
    }, 0)
    console.log("zmiana");
    [...new Set(this.inputBasket)].forEach((e: Tour) => {
      const count = this.inputBasket.filter((obj) => obj === e).length;
      this.betterBasket.push([e, count])
    })
  }

  openMainView() {
    this.openMainViewFlag.emit(true)
  }
}
