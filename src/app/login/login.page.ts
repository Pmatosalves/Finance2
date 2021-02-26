import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../services/auth.service';
import { User } from './../interfaces/user';
import { MenuController, LoadingController, ToastController, AlertController, NavController } from '@ionic/angular';
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
    private AuthService: AuthService,
    private afa: AngularFireAuth,
    public navCtrl: NavController,
    public alertCtrl: AlertController) { }

 /*   login(){
      this.afa.signInWithEmailAndPassword(this.userLogin.email, 
        this.userLogin.password).then(() => {
          this.navCtrl.navigateRoot('resumo')

        })
    }
 */
    
 
  async login() {
    console.log(this.userLogin)
    this.afa.signInWithEmailAndPassword(this.userLogin.email, 
      this.userLogin.password).then(() => {
        this.presentAlert('Usuário autenticado', '')
        this.navCtrl.navigateRoot('resumo')

      })
    await this.presentLoading();

    try {
      await this.AuthService.login(this.userLogin)
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentAlert(titles: string, subtitle: string) {
    const alert = await this.alertCtrl.create({
      header: titles,
      message: subtitle,
      buttons: ['OK']
    });

    await alert.present();
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
