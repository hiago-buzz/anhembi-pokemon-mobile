import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public cadastro: FormGroup = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    apelido: new FormControl(),
    dataNascimento: new FormControl(),
    genero: new FormControl(),
    pokemon: new FormControl(),
    senha: new FormControl(),
    confirmSenha: new FormControl(),
  });

  constructor() {}

  ngOnInit() {}

  public cadastrarUsuario() {
    console.log('Aí cadastrou.');
  }

  public resetForm() {
    this.cadastro.reset();
  }
}
