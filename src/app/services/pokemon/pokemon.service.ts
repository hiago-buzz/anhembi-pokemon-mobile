import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = "https://pokeapi.co/api/v2/pokemon";
  lsPokemon = []

  constructor(private request: RequestService) {
    this.getAllPokemon();
   }

  async getAllPokemon() {
    const {results} = await this.request.getter(this.baseUrl + "?offset=0&limit=150").toPromise()
    
     results.map(element => 
        this.request.getter(element.url).toPromise().then(data => {
          data.img=data.sprites.other["official-artwork"].front_default
          this.lsPokemon.push(data)
        }));
     
  }

  listaPokemon(){
    return this.lsPokemon;
  }

}
