import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  storage;
  usuarios = [];
  usuarioLogado = null;

  constructor(storage: Storage) {
    this.storage = storage;
    this.storage.create();
    this.storage.get('usuariosStorage').then(usuariosStorage => this.usuarios.push(...usuariosStorage))
      .catch(() => this.storage.set('usuariosStorage', this.usuarios));
  }

  public salvar(usuario) {
    const existeEmail = this.buscarPorEmail(usuario.email);

    if (existeEmail) {
      return {
        status: false,
        message: "EMAIL JÁ CADASTRADO!"
      }
    }

    this.storage.set('usuariosStorage', [...this.usuarios, usuario])
    this.storage.get('usuariosStorage').then(usuariosStorage => console.log(...usuariosStorage));

    this.usuarioLogado = {...usuario};

    return {
      status: true,
    }
  }

  public buscarPorEmail(email: string) {
    const usuarioEncontrado = this.usuarios.find(usuario => usuario.email == email);
    return usuarioEncontrado;
  }


  public buscar() {
    return this.usuarios;
  }

  public logar(email: string, senha: string){
    const usuario = this.buscarPorEmail(email);

    if(usuario){
      if(usuario.senha === senha){
        this.usuarioLogado = {...usuario};
        return true;
      }
    }

    return false;
  }

}

