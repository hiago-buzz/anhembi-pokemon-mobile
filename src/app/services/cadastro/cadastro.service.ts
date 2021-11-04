import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  storage;
  usuarios = [];
  constructor(storage: Storage) { 
    this.storage = storage;
    this.storage.create();
    this.storage.get('usuariosStorage').then(usuariosStorage => this.usuarios.push(...usuariosStorage))
    .catch(() => this.storage.set('usuariosStorage', this.usuarios) );
  }
  
  public salvar(usuario){
    this.storage.set('usuariosStorage', [...this.usuarios, usuario])
    this.storage.get('usuariosStorage').then(usuariosStorage => console.log(...usuariosStorage));
  }

  public buscarPorEmail(email){
    const usuarioEncontrado = this.usuarios.find(usuario => usuario.email == email);
    return usuarioEncontrado;
  }


  public buscar(){
    return this.usuarios;
  }
}

