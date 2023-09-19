import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from 'src/app/core/services/users.service';
import { messageService } from 'src/app/core/services/message.service';
import { userSessionService } from 'src/app/core/services/userSession.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuarioActivo: any = [];
  form!: FormGroup

constructor(
  private fb: FormBuilder,
  private router: Router,
  private user: userService,
  private message: messageService,
  private sesion: userSessionService
){}

ngOnInit(): void {
  this.form = this.fb.group({
    usuario: new FormControl(null, [Validators.required]),
    contraseña: new FormControl(null, [Validators.required]),
  })
}

get usuario() { return this.form.get('usuario') }
get contraseña() { return this.form.get('contraseña') }

onLogin(){
  this.validarRolUsuario(this.usuario?.value, this.contraseña?.value)
}

validarRolUsuario(usuario: string, contraseña: string) {
  this.user.getUserbyUserPass(usuario, contraseña).subscribe({
    next: result => {
      this.usuarioActivo = result
      if (this.usuarioActivo.rol === 1) {
        this.sesion.setAdminStatus(true)
        this.message.openSnackBar('Bienvenido Usuario ' + usuario);
        this.router.navigate(['/home'])
      } else {
        this.sesion.setWaiterStatus(true);
        this.message.openSnackBar('Bienvenido Usuario');
        this.router.navigate(['/navbar'])

      }
    },
    error: err => {
      this.message.openSnackBar('Usuario Incorrecto');
      console.log('Error no se pudo obtener el rol del usuario', err)
    }
  })

}

}
