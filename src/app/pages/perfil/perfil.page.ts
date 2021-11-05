import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';
@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss']
})
export class PerfilPage {

  private usuario: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    apelido: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl(null, [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required]),
  });

  constructor(
    private serviceCadastro: CadastroService, 
    private route: Router) {
      
  }

  ngOnInit(){
    this.serviceCadastro.existeLogin();
    const usuarioLogado = this.serviceCadastro.getUsuarioLogado();
    this.usuario.patchValue(usuarioLogado);
  }

  exit(){
    this.serviceCadastro.logout();
  }

  delete(){
    const { email } = this.usuario.getRawValue();
    this.serviceCadastro.delete(email);
  }

  editar(){
    const form = this.usuario.getRawValue();

    if(this.usuario.invalid){
      alert("PREENCHA OS CAMPOS CORRETAMENTE!");
      return
    }

    this.serviceCadastro.editar(form);

    alert("EDITADO COM SUCESSO!")
  }
}
