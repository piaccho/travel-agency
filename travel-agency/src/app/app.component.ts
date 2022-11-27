import { Component, OnInit } from '@angular/core';
import { ToursService } from './services/tours.service';
import { Tour } from './interfaces/tour';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'travel-agency';

  toursData!: Tour[]
  isToursDataLoaded = false
  cheapestTour: number = Infinity
  mostExpensiveTour: number = -Infinity
  basket: Tour[] = []
  tourFormFlag = false
  basketPreviewFlag = false
  viewFlag = true

  constructor(public toursService: ToursService) {
  }

  ngOnInit() {
    this.toursService.getToursData().subscribe(
      (response: any) => {
        // get data from json
        this.toursData = response;
        this.isToursDataLoaded = true;
        
        // get max and min price of tours
        this.toursData.forEach((element: Tour) => {
          this.cheapestTour = Math.min(this.cheapestTour, element.price)
          this.mostExpensiveTour = Math.max(this.mostExpensiveTour, element.price)
        });
      },
      (error: any) => {
      })
  }

  toggleBasketPreview(event:any) {
    this.basketPreviewFlag = !this.basketPreviewFlag
  }

  toggleTourForm(event: any) {
    this.tourFormFlag = !this.tourFormFlag
    if(this.tourFormFlag) event.target.innerHTML = "Hide panel"
    else event.target.innerHTML = "Add tour"
  }


  addTourToBasket(outputTour: Tour) {
    this.basket.push(outputTour);
  }

  deleteTourFromBasket(outputTour: Tour) {
    let index = this.basket.indexOf(outputTour)
    this.basket.splice(index, 1);
  }

  deleteTourFromArray(tour: Tour) {
    let index = this.toursData.indexOf(tour)
    this.toursData.splice(index, 1);
  }

  addTourToArray(outputTour: Tour) {
    this.toursData.unshift(outputTour);
  }

  toggleViewFlag(flag: boolean) {
    this.viewFlag = flag;
  }

  filterBasket(basket: Tour[]) {
    // return array with distinct objects and their number of occurences
    let betterBasket: [Tour, number][] = [];
    [...new Set(basket)].forEach((e: Tour) => {
      const count = basket.filter((obj) => obj === e).length;
      betterBasket.push([e, count])
    })
    return betterBasket
  }

  deleteCard(cardToDelete: Tour) {
    let index = this.toursData.indexOf(cardToDelete)
    this.toursData.splice(index, 1);
  }

}
