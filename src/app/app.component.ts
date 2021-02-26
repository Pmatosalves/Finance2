import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private afa: AngularFireAuth,
    public navCtrl: NavController
  ) {}

  logout() {
    this.afa.signOut().then(() => this.navCtrl.navigateRoot('login'))
  }
}
