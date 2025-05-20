import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoUploadYtComponent } from './video-upload-yt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [VideoUploadYtComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [VideoUploadYtComponent]
})
export class VideoUploadYtModule { }
