import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  public peso:number = 0;
  public altura:number = 0;

  async createAlert(result:string){
    const alert = await this.alertController.create({
      header: "Atencao",
      message: result,
      buttons: ["OK"]
    })

    await alert.present()
  }

  async calcular(){
    let result:string = "";
    const IMC = this.peso / (this.altura * this.altura);

    if(IMC < 18.5){
      // Peso menor que 18.5
      result = "Abaixo do peso";
      this.createAlert(result);
    }else if (IMC < 24.9){
      // Peso maior ou igual a 18.5 e menor que 24.9
      result = "Peso normal"
      this.createAlert(result);
    }else if (IMC < 29.9 && IMC >= 25){
      // Peso maior ou igual a 25 e menor que 29.9
      result = "Sobrepeso"
      this.createAlert(result);
    }else {
      // Se for maior que 29.9 então, sobrepeso
      result = "Obesidade"
      this.createAlert(result);
    }
    
    console.log(IMC);
    console.log(result);
  }
}
