import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  hide2 = true;
  Nombre = new FormControl('',[Validators.required]);
  Apellido = new FormControl('',[Validators.required]);
  Usuario = new FormControl('',[Validators.required]);
  Correo = new FormControl('', [Validators.required, Validators.email]);
  Telefono = new FormControl('',[Validators.required]);
  FechaNac = new FormControl('',[Validators.required]);
  contrasenia = new FormControl('',[Validators.required]);
  confirmContrasenia = new FormControl('',[Validators.required]);
  mostrarMensaje = false;
  mostrarMensajeError = false;


  validacionCont(): boolean {
    const regex = new RegExp('(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&/()])([A-Za-z0-9!"#$%&/()]){8,20}');
    if (this.contrasenia.value == this.confirmContrasenia.value) {
      if (regex.test(this.contrasenia.value as string)) {
        return true;
      }
    }
    return false;
  }
  crearUsuario() {}

  desactivarMensaje() {
    this.mostrarMensaje = false
    this.mostrarMensajeError = false
  }

  getErrorMessage() {
    if (this.Correo.hasError('required')) {
      return 'Por favor ingrese un correo';
    }

    return this.Correo.hasError('email') ? 'Por favor ingrese un correo valido' : '';
  }

  getErrorMessageEmptyFile(){
    if(this,this.contrasenia.hasError('required')){
      return 'Por favor ingrese un valor';
    }
    return '';
  }

  getErrorMessageDate(){
    if(this,this.contrasenia.hasError('required')){
      return 'Por favor ingrese una fecha';
    }
    return '';
  }

  getErrorMessagePassword(){
    if(this,this.contrasenia.hasError('required')){
      return 'Por favor ingrese la contraseña';
    }
    return '';
  }

}
