import { Component } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';

@Component({
  selector: 'app-equipe',
  templateUrl: 'equipe.page.html',
  styleUrls: ['equipe.page.scss']
})
export class EquipePage {

  
  constructor(private serviceCadastro: CadastroService) {
  }

  ngOnInit(){
    this.serviceCadastro.existeLogin();
  }
}
