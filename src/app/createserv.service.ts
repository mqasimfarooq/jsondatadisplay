import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateservService {

  

  constructor(private http: HttpClient) {
  }

  getdata() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
