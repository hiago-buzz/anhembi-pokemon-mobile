import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipePage } from './equipe.page';

import { EquipePageRoutingModule } from './equipe-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EquipePageRoutingModule
  ],
  declarations: [EquipePage]
})
export class EquipePageModule {}
