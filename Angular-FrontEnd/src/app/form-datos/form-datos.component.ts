import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-datos',
  templateUrl: './form-datos.component.html',
  styleUrls: ['./form-datos.component.css']
})
export class FormDatosComponent implements OnInit {
  texto1:string = "Felicidades"
  texto2:string = "Debes de caminar más" 
  nombre:string;
  correo:string;
  km:number;
  succes:boolean;
  notSucces:boolean;


  constructor() { }


  ngOnInit(): void {
  }

  onSendForm(){
    this.succes = (this.km > 4) ? true : false;
    if(this.succes == false){
      this.notSucces = (this.km <= 4) ? true: false;
    }
    
  }
}
