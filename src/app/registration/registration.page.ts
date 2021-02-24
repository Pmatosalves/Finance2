import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  tipo: boolean;
  password: string = ""
  constructor(public menu: MenuController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menu.enable(false)
   }
   exibirPassword1(){
    this.tipo = !this.tipo
  }
}
