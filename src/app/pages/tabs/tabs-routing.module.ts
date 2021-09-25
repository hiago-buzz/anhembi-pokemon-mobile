import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'pokedex',
        loadChildren: () => import('../pokedex/pokedex.module').then(m => m.PokedexPageModule)
      },
      {
        path: 'equipe',
        loadChildren: () => import('../equipe/equipe.module').then(m => m.EquipePageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'tabs',
        redirectTo: 'pokedex',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'tabs',
    redirectTo: 'pokedex',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
