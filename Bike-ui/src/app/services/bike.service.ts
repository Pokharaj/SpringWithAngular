import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  getBikes() {
    return this.http.get(environment.bikesDataUrl);
  }

  getBike(id: number) {
    return this.http.get(environment.bikesDataUrl + '/' + id);
  }

  createBikeRegistration(bike) {
    const body = JSON.stringify(bike);
    return this.http.post(environment.bikesDataUrl, body, httpOptions);
  }
}
