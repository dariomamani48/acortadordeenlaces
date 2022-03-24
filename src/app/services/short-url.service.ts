import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

url="https://api-ssl.bitly.com/v4/shorten"
token="3c1229f5aeec2835fb38e7f998492194a21a9adb"


  constructor(private http: HttpClient) { }

  getUrlShort(nombreUrl: string): Observable<any>{
    /* const tokenHeader= new HttpHeaders({Authorization:'Bearer '+ this.token}) */
    const body={
      long_url: nombreUrl
    }
    return this.http.post(this.url, body)
  }
}
