import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  apiUrl:string = 'https://6466e9a7ba7110b663ab51f2.mockapi.io/api/v1/pack1';
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any>(this.apiUrl);
  }
}
