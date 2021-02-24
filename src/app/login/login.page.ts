import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  username: string = ""
  password: string = ""
  tipo: boolean;
  constructor(public menu: MenuController) { }

  login(){
    alert(this.password)
    const {username, password} = this
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
