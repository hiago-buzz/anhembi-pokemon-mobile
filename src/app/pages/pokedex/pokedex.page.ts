import { Component } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: 'pokedex.page.html',
  styleUrls: ['pokedex.page.scss']
})
export class PokedexPage {

  lsPokemon; 
  constructor(private serviceCadastro: CadastroService, private pokemon: PokemonService) {
  }

  ngOnInit(){
    this.serviceCadastro.existeLogin();
    this.lsPokemon = this.pokemon.listaPokemon(); 
  }
}
