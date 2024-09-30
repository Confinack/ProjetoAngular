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

  public nome:string = "";

  public lista:any[] = [
    {
      Titulo: "Rock",
    },
    {
      Titulo: "Lo-fi"
    },
    {
      Titulo: "Shitrock",
    },
    {
      Titulo: "Romance",
    },
    {
      Titulo: "Nightcore",
    }
  ]


  public adicionar(){
    this.lista.push({Titulo: this.nome});
    this.nome = "";
  }

  public remover(objeto:object){
    const index = this.lista.indexOf(objeto);
    this.lista.splice(index, 1);
  }
}
