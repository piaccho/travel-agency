import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TourFormComponent } from './components/tour-form/tour-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasketPreviewComponent } from './components/basket-preview/basket-preview.component';
import { BasketComponent } from './components/basket/basket.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewAddComponent } from './components/review-add/review-add.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    TourCardComponent,
    TourFormComponent,
    BasketPreviewComponent,
    BasketComponent,
    ReviewsComponent,
    ReviewAddComponent,
    FiltersComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
