import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  ficr = './assets/img/ficr.png'
  dio = './assets/img/dio.png'
  udemy = './assets/img/udemy.png'
  curso_em_video = './assets/img/curso_em_video.png'
  ifrs = './assets/img/ifrs.png'
  b7web = './assets/img/b7web.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
