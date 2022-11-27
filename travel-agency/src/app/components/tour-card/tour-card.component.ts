import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rating } from 'src/app/interfaces/rating';
import { Tour } from 'src/app/interfaces/tour';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent implements OnInit {
  @Input() tourInput!: Tour;
  @Input() maxMinPrice!: [number, number];
  // true - add tour to basket / false - delete tour from basket
  @Output() outputTourAdd = new EventEmitter<Tour>();
  @Output() outputTourDelete = new EventEmitter<Tour>();
  @Output() outputCardDelete = new EventEmitter<Tour>();
  tourAvailableTickets: number = 0
  tourStartDate!: Date
  tourEndDate!: Date
  


  constructor() { 
    
  }

  ngOnInit(): void {
    this.tourAvailableTickets = this.tourInput.maxTickets
    // this.tourStartDate = new Date(this.tourInput.startDate)
    // this.tourEndDate = new Date(this.tourInput.endDate)
  }

  addTour() {
    this.tourAvailableTickets -= 1
    this.outputTourAdd.emit(this.tourInput);
  }

  deleteTour() {
    this.tourAvailableTickets += 1
    this.outputTourDelete.emit(this.tourInput);
  }

  deleteThisTour() {
    this.outputCardDelete.emit(this.tourInput);
  }
}
