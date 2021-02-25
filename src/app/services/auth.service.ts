import { User } from './../interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Cadastrar } from './../interfaces/cadastrar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(login: User){
    return this.afa.signInWithEmailAndPassword(login.email, login.password)
  }
  registro(cadastro: Cadastrar){
    return this.afa.createUserWithEmailAndPassword(cadastro.email, cadastro.password)
  }

  getAuth(){
    return this.afa;
  }
}
