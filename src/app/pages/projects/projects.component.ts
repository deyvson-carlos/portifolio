import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  portifolio1 = './assets/img/portifolio/portifolio.png'
  marvel = './assets/img/marvel/marvel.png'
  locadora = './assets/img/locadora/locadora.png'

  site: boolean = false;

  nota: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.site = !this.site;
  }

  onClick(){
    this.nota = !this.nota;
  }

}
