import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  btnText = 'Compartilhar!';

  Novo_valor: string = 'Enviar!'

  momentForm! : FormGroup;
  
  myNumber: number = 0;


  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id : new FormControl(''),
      title : new FormControl('', [Validators.required]),
      description : new FormControl('', [Validators.required]),
      image : new FormControl(''),
    });
  }

  get title(){
    return this.momentForm.get('title')!;
  }
  get description(){
    return this.momentForm.get('description')!;
  }

  submit(){
    if (this.momentForm.invalid){
      return;
    }
    
    console.log('Envio Formulário');
  }

  onChangeNumber(){
   this.myNumber = Math.floor(Math.random() * 10);
  }

}
