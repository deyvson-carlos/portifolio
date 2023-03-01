import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  
  private url: string ='https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail'
  
  constructor(private httpClient: HttpClient) { }

  listaGet(){
    return this.httpClient.get(this.url).toPromise();
    
  }
}
