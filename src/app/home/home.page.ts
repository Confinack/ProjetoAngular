import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  constructor() {}

  public peso:number = 0;
  public altura:number = 0;

  public calcular(){
    let result:string = "";
    const IMC = this.peso / (this.altura * this.altura);
    if(IMC < 18.5){
      // Peso menor que 18.5
      result = "Abaixo do peso";
    }else if (IMC < 24.9){
      // Peso maior ou igual a 18.5 e menor que 24.9
      result = "Peso normal"
    }else if (IMC < 29.9 && IMC >= 25){
      // Peso maior ou igual a 25 e menor que 29.9
      result = "Sobrepeso"
    }else {
      // Se for maior que 29.9 então, sobrepeso
      result = "Obesidade"
    }

    console.log(IMC);
    console.log(result);
  }
}
