import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  serviceCadastro;
  public cadastro: FormGroup = new FormGroup({
    nome: new FormControl(String, [Validators.required]),
    email: new FormControl(String, [Validators.required]),
    apelido: new FormControl(String, [Validators.required]),
    dataNascimento: new FormControl(String, [Validators.required]),
    genero: new FormControl(String, [Validators.required]),
    pokemon: new FormControl(String, [Validators.required]),
    senha: new FormControl(String, [Validators.required]),
    confirmSenha: new FormControl(String, [Validators.required]),
  });

  constructor(serviceCadastro: CadastroService) {
    this.serviceCadastro = serviceCadastro;
  }

  ngOnInit() {}

  public cadastrarUsuario() {
    const form = this.cadastro.getRawValue();
    // console.log('Aí cadastrou.');
    // console.log(form);
    this.serviceCadastro.salvar(form);
    
  }

  public resetForm() {
    this.cadastro.reset();
  }
}
