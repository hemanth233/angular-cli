import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class HotelsService {
  private _hotelsUrl = 'http://localhost:3030/api/hotels'
  constructor(private http:HttpClient) { }

  getAllHotels(){
    return this.http.get<any>(this._hotelsUrl);
  }
}
