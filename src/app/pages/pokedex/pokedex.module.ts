import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokedexPage } from './pokedex.page';

import { PokedexPageRoutingModule } from './pokedex-routing.module';
import {CardComponent} from '../../components/card/card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PokedexPageRoutingModule
  ],
  declarations: [PokedexPage, CardComponent]
})
export class PokedexPageModule {}
