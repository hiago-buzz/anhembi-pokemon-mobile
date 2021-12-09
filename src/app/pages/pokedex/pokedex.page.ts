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
  lsPokemonTotal;
  nomePokemon:string;
  constructor(private serviceCadastro: CadastroService, private pokemon: PokemonService) {

  }

  filtrar(){
    
    console.log(this.lsPokemonTotal);
    
    if(!this.nomePokemon){
      this.lsPokemon = [...this.lsPokemonTotal] 
    } else {
    const pokemonFiltrado = this.lsPokemonTotal.filter(pokemon => pokemon.name.includes(this.nomePokemon));
    this.lsPokemon = [...pokemonFiltrado]
    }
  }

  ngOnInit(){
    this.serviceCadastro.existeLogin();
    this.lsPokemon = this.pokemon.listaPokemon();
    this.lsPokemonTotal = this.pokemon.listaPokemon();
  }
}
