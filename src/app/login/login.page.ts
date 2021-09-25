import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

constructor(private route: Router) { }

  ngOnInit() {
  }
  redirect(page: string){
    this.route.navigate([page]);
  }

  login() {
    this.redirect('/tabs/pokedex');
  }

  redirectToCreate(){
    this.redirect('/cadastro');
  }
}
