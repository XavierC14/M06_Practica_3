import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  _text: string = "Sample Text";
  _disabled: boolean = true;
  _inputText: string = "";

  array: string[] = ["Xavier", "Bryan", "Iago", "Joel", "Axel", "Didac"];

  nombre: string="";

  ale1: number = 0;
  ale2: number = 0;
  ale3: number = 0;
  ale4: number = 0;

  nombregua: string="";

  ale1gua: number = 0;
  ale2gua: number = 0;
  ale3gua: number = 0;
  ale4gua: number = 0;

  botonClickado(event: any): void {
    console.log(event)
  }

  numerosAleatorios(event: any): void {
    this.nombre=this.array[Math.floor(Math.random()*6)];
    this.ale1=Math.floor (Math.random() * 21);
    this.ale2=Math.floor (Math.random() * 21);
    this.ale3=Math.floor (Math.random() * 21);
    this.ale4=Math.floor (Math.random() * 21);
  }

  numerosGuardados(event: any): void {
    this.nombregua=this.nombre;
    this.ale1gua=this.ale1;
    this.ale2gua=this.ale2;
    this.ale3gua=this.ale3;
    this.ale4gua=this.ale4;
  }

}
