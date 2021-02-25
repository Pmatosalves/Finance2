import { AngularFireAuth } from '@angular/fire/auth';
import { Cadastrar } from './../interfaces/cadastrar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  registro(cadastro: Cadastrar){
    return this.afa.createUserWithEmailAndPassword(cadastro.email, cadastro.password)
  }
}
