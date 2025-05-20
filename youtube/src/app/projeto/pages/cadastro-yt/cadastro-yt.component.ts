import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroYtService } from './cadastro-yt.service';
import { Usuario } from 'src/app/shared/models/Usuario';

@Component({
  selector: 'app-cadastro-yt',
  templateUrl: './cadastro-yt.component.html',
  styleUrls: ['./cadastro-yt.component.css']
})
export class CadastroYtComponent implements OnInit{

  cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: CadastroYtService,
  ) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      nome: ['', [Validators.required]],
      confirmarSenha: ['', Validators.required]
    });
  }

  cadastrarUsuario(): void {
    if (this.cadastroForm.invalid) {
      alert('Preencha corretamente todos os campos.');
      return;
    }

    const { email, senha, confirmarSenha, nome } = this.cadastroForm.value;

    if (senha !== confirmarSenha) {
      alert('Senhas são diferentes!');
      return;
    }

    const usuario: Usuario = this.cadastroForm.value;

    this.service.criarUsuario(usuario).subscribe(x=> {
      if(x) {
        this.voltarParaLogin()
      }
    });
  }

  voltarParaLogin(): void {
    this.router.navigate(['']);
  }

}
