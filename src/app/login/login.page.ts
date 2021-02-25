import { User } from './../interfaces/user';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public userLogin: User = {};
 

  tipo: boolean;
  constructor(public menu: MenuController) { }

  login(){
    console.log(this.userLogin)
  }

  ionViewDidEnter(){
   this.menu.enable(false)
  }
  ionViewCanLeave(){
   this.menu.enable(true)
  }
  exibirPassword(){
    this.tipo = !this.tipo
  }
  ngOnInit() {
  }

}
