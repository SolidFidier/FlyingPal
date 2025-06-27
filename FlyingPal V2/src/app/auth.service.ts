// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth) { }

  // src/app/auth.service.ts
registrarUser(datos: User) {
  return this.authfirebase.createUserWithEmailAndPassword(datos.correo, datos.password);
}

}
