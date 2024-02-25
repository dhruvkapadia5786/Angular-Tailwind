import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

const apiUrl = environment.apiUrl;
console.log('apiUrl :>> ', apiUrl);
const apiKey = environment.apiKey;
console.log('apiKey :>> ', apiKey);
const accessToken = environment.accessToken;
console.log('accessToken :>> ', accessToken);

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.http.get(`${apiUrl}?api_key=${apiKey}`, { headers });
  }
}
