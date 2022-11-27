import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToursService {

  //  configured json-server with added proxy.conf
  // dataURL = "/api/tours"

  //  local json
  dataURL = "assets/json/tours.json"

  tours$: Observable<any> = this.httpClient.get(this.dataURL)
  constructor(private httpClient: HttpClient) { }

  getToursData() {
    return this.tours$;
  }
}
