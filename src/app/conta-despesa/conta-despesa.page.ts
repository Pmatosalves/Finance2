import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta-despesa',
  templateUrl: './conta-despesa.page.html',
  styleUrls: ['./conta-despesa.page.scss'],
})
export class ContaDespesaPage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }
 
}
