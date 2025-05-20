import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginYtService } from './login-yt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-yt',
  templateUrl: './login-yt.component.html',
  styleUrls: ['./login-yt.component.css']
})
export class LoginYtComponent implements OnInit {
  loginForm!: FormGroup

  constructor(private router: Router, private service: LoginYtService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    })
  }

  logarUsuario() {
    if(this.loginForm.invalid) {
      this.loginForm.markAsTouched();
      return;
    }

    this.service.buscaUsuario(this.loginForm.value.email, this.loginForm.value.senha).subscribe(x => {
      if(x.length > 0) {
        sessionStorage.clear();
        sessionStorage.setItem("usuario", JSON.stringify(x[0]));
        setTimeout(() => {
          this.router.navigate(['/principal']);
        }, 500);
        return;
      }

      alert("Informações invalidas!");
      
    });
  }

  criarNovaConta(event: Event) {
    event.preventDefault();
    this.router.navigate(['/cadastro']);
  }
}
