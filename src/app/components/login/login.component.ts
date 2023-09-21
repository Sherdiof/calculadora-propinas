import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../core/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  usuarioActivo: any = [];
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  public onLogin() {
    const {email, password} = this.form.value;

    this.authService.login(email, password).then(res => {
      if (res['role'] == 'admin') {
        this.router.navigateByUrl('/home');
      } else {
        this.router.navigateByUrl('/orders');
      }
    }).catch(err => {
      this._snackBar.open("Usuario o contraseña incorrectos", "Cerrar");
    })
  }

  public isLogged() {
    const aux = this.authService.isLogged()
      .subscribe(value => {
        console.log(value);
      });
  }

  logout() {
    this.authService.logout().then();
  }
}
