import { Component,Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit, OnChanges {
  @Input() btnText!: string;

  

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.log('Valor alterado');
  }

  private log(hook: string){
    console.log(hook);
  }

}
