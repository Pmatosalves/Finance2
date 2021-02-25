import { AuthService } from './../services/auth.service';
import { User } from './../interfaces/user';
import { MenuController, LoadingController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public userLogin: User = {};
  private loading: any;

  tipo: boolean;
  constructor(
    public menu: MenuController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private AuthService: AuthService) { }

  
  async login() {
    console.log(this.userLogin)
    await this.presentLoading();

    try {
      await this.AuthService.login(this.userLogin)
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }
  
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
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
