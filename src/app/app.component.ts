import { Component } from '@angular/core';
import * as AOS from 'aos';
import { ComentarioService } from './services/comentario.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private comentarioService: ComentarioService){
   AOS.init();
  }

  listaApiGet(){
    this.comentarioService.listaGet()
    .then(d=>console.log(d))
    .catch(erro=>console.error(erro))
  }

  }





