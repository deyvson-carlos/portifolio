import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContato } from './interface/icontato';

@Injectable({
  providedIn: 'root'
})
export class ApiEnacomService {
  private urlTest = 'https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail';

  constructor(private httpClient: HttpClient) { }

  retornaAPI(){
    return this.httpClient.get<IContato>(this.urlTest);
  }
}
