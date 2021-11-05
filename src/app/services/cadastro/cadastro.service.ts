import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {


  usuarios = [];
  usuarioLogado = null;

  constructor(private storage: Storage, private route: Router) {
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

  public login(email: string, senha: string){
    const usuario = this.buscarPorEmail(email);
    if(usuario){
      if(usuario.senha === senha){
        this.usuarioLogado = {...usuario};
        return true;
      }
    }

    return false;
  }

  public logout(){
    this.usuarioLogado = null;
    this.route.navigate(['/']);
  }

  public existeLogin(){
    if(this.usuarioLogado === null){
      this.route.navigate(['/']);
    }

  }

  public getUsuarioLogado(){
    return this.usuarioLogado;
  }

  public delete(email: string){
    const usuarioRestantes = this.usuarios.filter(usuario => usuario.email !== email);

    this.usuarios = [...usuarioRestantes];
    this.storage.set('usuariosStorage', this.usuarios);

    this.logout();
  }

  public editar(perfil){
    const usuarioEditado = {...this.usuarioLogado , ...perfil};
    const outrosUsuarios = this.usuarios.filter(usuario => usuario.email !== perfil.email);

    this.usuarios = [...outrosUsuarios, {...usuarioEditado}];
    this.usuarioLogado = {...usuarioEditado};
    this.storage.set('usuariosStorage', this.usuarios);
  }
}

