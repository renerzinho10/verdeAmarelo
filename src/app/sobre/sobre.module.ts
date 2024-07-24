import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SobrePageRoutingModule } from './sobre-routing.module';
import { SobrePage } from './sobre.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SobrePageRoutingModule
  ],
  declarations: [SobrePage]
})
export class SobrePageModule {}