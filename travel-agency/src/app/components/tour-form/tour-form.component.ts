import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tour } from 'src/app/interfaces/tour';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.css']
})
export class TourFormComponent implements OnInit {

  modelForm!: FormGroup;
  selectedFile!: File;
  outputTour!: Tour;
  fcontrols = []
  @Output() outputTourForm = new EventEmitter<Tour>();

  constructor(public formBuilder: FormBuilder, public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    // model form of tour
    this.modelForm = this.formBuilder.group({
      title: ['',[Validators.required,]],
      destinationCountry: ['',[Validators.required,]],
      startDate: ['',[Validators.required,]],
      endDate: ['',[Validators.required,]],
      price: ['',[Validators.required,]],
      maxTickets: ['',[Validators.required,]],
      description: ['',[Validators.required,]],
      previewImage: ['',[Validators.required,]]
    })
  }

  onSubmit(form: FormGroup): void {
    let newTour = {
      title: form.value.title,
      destinationCountry: form.value.destinationCountry,
      startDate: form.value.startDate,
      endDate: form.value.endDate,
      price: form.value.price,
      maxTickets: form.value.maxTickets,
      description: form.value.description,
      previewImage: form.value.previewImage,
      summaryRating: 0,
      ratingsNumber: 0
    } as Tour;

    console.log(form.get('previewImage')!);

    this.outputTourForm.emit(newTour);
  };

  // onSubmit2(form: FormGroup): void {
  //   let newTour = {
  //     title: form.get('title')!.value,
  //     destinationCountry: form.get('destinationCountry')!.value,
  //     startDate: form.get('startDate')!.value,
  //     endDate: form.get('endDate')!.value,
  //     price: parseInt(form.get('price')!.value),
  //     maxTickets: parseInt(form.get('maxTickets')!.value),
  //     description: form.get('description')!.value,
  //     previewImage: this.addPhotoToAssetsAndGetImgURL(),
  //   } as Tour;

  //   this.outputTourForm.emit(newTour);
  // };

  // onFileSelected(event: any) {
  //   this.selectedFile = <File>event.target.files[0];
  //   console.log(this.selectedFile);
  //   // return this.selectedFile
  // }

  // add 'File' argument and implementation
  // addPhotoToAssetsAndGetImgURL(): string {
  //   let URL = " "
  //   return URL
  // }

  // uploadPhotoToDB () {
  //   //
  // }
  
}
