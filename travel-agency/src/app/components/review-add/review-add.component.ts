import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Rating } from 'src/app/interfaces/rating';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent implements OnInit {
  @Output() outputRating = new EventEmitter<Rating>();
  modelForm!: FormGroup;

  
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    // model form of rating
    this.modelForm = this.formBuilder.group({
      rating: ''
    })
  }

  onSubmit(form: FormGroup): void {
    if (form.value.rating === "") return
    let newRating = {
      rating: form.value.rating
    } as Rating;
    console.log(newRating);
    this.outputRating.emit(newRating);
  };

}
