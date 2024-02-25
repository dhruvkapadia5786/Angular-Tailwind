import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}
  getPost(){
    return this.http.get(BASE_URL)
  }
}
 