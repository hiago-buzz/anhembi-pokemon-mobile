import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });

  constructor(
    private serviceCadastro: CadastroService, 
    private route: Router) {
  }

  ngOnInit() {}
  
  redirect(page: string){
    this.route.navigate([page]);
  }

  login() {
    const {email, senha} = this.loginForm.getRawValue();

    if(!this.loginForm.valid){
      alert("PREENCHA TODOS OS CAMPOS!")
      return
    }

    const response = this.serviceCadastro.login(email, senha);

    if(response){
      this.redirect('/tabs/pokedex');
      return
    }
    
    alert("TENTE NOVAMENTE!")
  
  }

  redirectToCreate(){
    this.redirect('/cadastro');
  }
}
