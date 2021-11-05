import { Component } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: 'pokedex.page.html',
  styleUrls: ['pokedex.page.scss']
})
export class PokedexPage {

  constructor(private serviceCadastro: CadastroService) {
  }

  ngOnInit(){
    this.serviceCadastro.existeLogin();
  }
}
