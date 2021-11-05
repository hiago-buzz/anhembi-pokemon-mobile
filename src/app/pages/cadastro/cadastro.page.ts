import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public cadastro: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    apelido: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl(null, [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    confirmSenha: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required]),
  });

  constructor(
    private serviceCadastro: CadastroService, 
    private route: Router) {
  }

  ngOnInit() {}

  public cadastrarUsuario() {
    const form = this.cadastro.getRawValue();

    if(!this.cadastro.valid){
      alert("PREENCHA TODOS OS CAMPOS!")
      return
    }

    if(this.isSenhaInvalida()){
      alert("A SENHA DEVE SER IGUAL")
      return
    }
    const response = this.serviceCadastro.salvar(form);

    if(response.status){
      this.route.navigate(['/tabs/perfil']);
      return
    }
    
    alert(response.message)
  }

  private isSenhaInvalida(){
    const {senha, confirmSenha} = this.cadastro.controls;

    return !senha.value || !confirmSenha.value || senha.value !== confirmSenha.value;
  }

  public resetForm() {
    this.cadastro.reset();
  }

  public voltar(){
    this.route.navigate(['/']);
  }
}
