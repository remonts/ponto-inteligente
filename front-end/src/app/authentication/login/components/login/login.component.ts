import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Login } from '../../models';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login-pf',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.generateForm();
  }

  public generateForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public login(): void {
    if (this.form.invalid) {
      return;
    }

    const login: Login = this.form.value;
    this.loginService.login(login).subscribe(
      (data) => {
        localStorage['token'] = data['data']['token'];
        const usuarioData = JSON.parse(
          atob(data['data']['token'].split('.')[1])
        );
        if (usuarioData['role'] == 'ROLE_ADMIN') {
          alert('admin');
          // this.router.navigate(['/admin']);
        } else {
          alert('func');
          // this.router.navigate(['/funcionario']);
        }
      },
      (err) => {
        let msg: string = 'Tente novamente em instantes.';
        if (err['status'] == 401) {
          msg = 'Email/senha inválido(s).';
        }
        this.snackBar.open(msg, 'Erro', { duration: 5000 });
      }
    );
  }
}
