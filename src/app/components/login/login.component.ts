import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { Login } from '../../models/login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  contador = 0;
  hide = true;
  correo = new FormControl('', [Validators.required, Validators.email]);
  contrasenia = new FormControl('', [Validators.required]);
  mostrarMensaje = false;
  mostrarMensajeError = false;

  constructor(private loginService: LoginService, public router: Router) { }

  desactivarMensaje() {
    this.mostrarMensaje = false
    this.mostrarMensajeError = false
  }

  getErrorMessage() {
    if (this.correo.hasError('required')) {
      return 'Por favor ingrese un correo';
    }

    return this.correo.hasError('email') ? 'Por favor ingrese un correo valido' : '';
  }

  getErrorMessagePassword(){
    if(this,this.contrasenia.hasError('required')){
      return 'Por favor ingrese la contraseña';
    }
    return '';
  }


  login() {

  }

}
