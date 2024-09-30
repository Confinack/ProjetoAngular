import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  constructor() {}

  public comida:string = "";
  public comidas:any[] = [];

  public adicionar(){
    this.comidas.push({Nome: this.comida});
    this.comida = "";
  }

  public remover(objeto:any){
    const index = this.comidas.indexOf(objeto);
    this.comidas.splice(index, 1);
  }

}
