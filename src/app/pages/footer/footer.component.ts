import { Component, OnInit } from '@angular/core';
import { ApiEnacomService } from 'src/app/apienacom.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    constructor(private apiEnacomService: ApiEnacomService) {

    }

    ngOnInit(): void {

     }

     listarApiContato(){
      this.apiEnacomService.retornaAPI();
    }

  }
