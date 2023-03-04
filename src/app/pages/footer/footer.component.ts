import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiEnacomService } from 'src/app/apienacom.service';
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
    contatos: apiResponse = {} as apiResponse
    subscriptions!: Subscription[]
    constructor(private apiEnacomService: ApiEnacomService) {

    }
  
    listarApiContato(){
      let subscriptions = this.apiEnacomService.retornaAPI().subscribe((data) => {
        this.contatos = data.contact
      });
      this.subscriptions.push(subscriptions)
    }

    ngOnInit(): void {
      this.listarApiContato()
     }

     ngOnDestroy(): void {
      this.subscriptions.forEach(element => {
        element.unsubscribe
      });

    }

  

  }

  interface apiResponse {
    email: string,
    name:string,
    tel: string
  }