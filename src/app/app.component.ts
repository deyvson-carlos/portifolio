import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  valor: number = 5;
  mudarValor(){
    this.valor++;
  }

  constructor(){
   AOS.init();
  }

}