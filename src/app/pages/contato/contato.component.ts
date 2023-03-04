import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  curriculo = "./pdf/curriculo.pdf"
  

  constructor() { }

  ngOnInit(): void {

  }

}
