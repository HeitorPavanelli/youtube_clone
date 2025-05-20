import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../models/Usuario';
import { VideoUploadYtService } from './video-upload-yt.service';
import { Videos } from '../../models/Videos';

@Component({
  selector: 'app-video-upload-yt',
  templateUrl: './video-upload-yt.component.html',
  styleUrls: ['./video-upload-yt.component.css']
})
export class VideoUploadYtComponent implements OnInit {

  videoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<VideoUploadYtComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: VideoUploadYtService
  ) {}

  ngOnInit(): void {
    this.videoForm = this.fb.group({
      titulo: ['', Validators.required],
      link: ['', Validators.required],
      descricao: [''],
    });
  }

  onSubmit(): void {
    if (this.videoForm.valid) {
      const usuarioString = sessionStorage.getItem("usuario");
      if(usuarioString) {
        const usuario: Usuario = JSON.parse(usuarioString);
        const obj: Videos = {
          titulo: this.videoForm.value.titulo,
          link: this.videoForm.value.link,
          descricao: this.videoForm.value.descricao,
          usuario_id: usuario.id,
        }

        this.service.adicionaVideo(obj).subscribe(res => {})
      }

      this.dialogRef.close(this.videoForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
