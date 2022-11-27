import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Rating } from 'src/app/interfaces/rating';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  ratings: Rating[] = []
  avgRating: number = 0


  addRating(newRating: Rating) {
    this.ratings.push(newRating)
    this.updateAvgRating()
  }  

  updateAvgRating() {
    this.avgRating = this.ratings.length === 0 ? 0 : this.ratings.reduce<number>((acc: number, curr: Rating):number => {
      return acc + parseInt(curr.rating.toString())
    }, 0) / this.ratings.length

  }

}
