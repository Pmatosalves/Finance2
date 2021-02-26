import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { ReceitaService } from 'src/app/services/receita.service';
import { Receita } from 'src/app/interfaces/receita';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  private loading: any;
  public products = new Array<Receita>();
  private productsSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private productService: ReceitaService,
    private toastCtrl: ToastController,
    public navCtrl: NavController,
    private afa: AngularFireAuth  ) {
    this.productsSubscription = this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }

  logout() {
    this.afa.signOut().then(() => this.navCtrl.navigateRoot('login'))
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async deleteProduct(id: string) {
    try {
      await this.productService.deleteReceita(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}
