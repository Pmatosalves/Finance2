import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaDespesaPageRoutingModule } from './conta-despesa-routing.module';

import { ContaDespesaPage } from './conta-despesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaDespesaPageRoutingModule
  ],
  declarations: [ContaDespesaPage]
})
export class ContaDespesaPageModule {}
