import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipePage } from './equipe.page';

const routes: Routes = [
  {
    path: '',
    component: EquipePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipePageRoutingModule {}
