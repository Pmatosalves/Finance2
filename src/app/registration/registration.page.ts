import { AuthService } from './../services/auth.service';
import { Cadastrar } from './../interfaces/cadastrar';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  tipo: boolean;

  public registrationUser: Cadastrar = {};
  private loading: any;

  constructor(
    public menu: MenuController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private AuthService: AuthService,

    ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menu.enable(false)
   }
   exibirPassword1(){
    this.tipo = !this.tipo
  }
  

  async Cadastar() {
    console.log(this.registrationUser)
    await this.presentLoading();

    try {
      await this.AuthService.registro(this.registrationUser)
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
}

