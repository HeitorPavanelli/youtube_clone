import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstatisticaYtModule } from './components/estatistica-yt/estatistica-yt.module';
import { PesquisaYtModule } from './components/pesquisa-yt/pesquisa-yt.module';
import { SpinnerYtModule } from './components/spinner-yt/spinner-yt.module';
import { VideoUploadYtModule } from './components/video-upload-yt/video-upload-yt.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PesquisaYtModule,
    SpinnerYtModule,
    VideoUploadYtModule,
    EstatisticaYtModule
  ],
  exports: [PesquisaYtModule, SpinnerYtModule, VideoUploadYtModule, EstatisticaYtModule]
})
export class SharedModule { }
