import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContratosPageRoutingModule } from './contratos-routing.module';
import { ContratosPage } from './contratos.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ContratosPageRoutingModule
  ],
  declarations: [ContratosPage]
})
export class ContratosPageModule {}