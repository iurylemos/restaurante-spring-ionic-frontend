import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { CidadeServico } from '../../services/domain/cidade.servico';
import { EstadoServico } from '../../services/domain/estado.servico';

/*
  No caso todos os serviços até agora tinha sido declarados no app.module.ts
  Pois vai para toda a aplicação, mas esse em específico estou colocando aqui

  É possivel declarar serviços em outros modulos, além do principal
*/
@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers: [
    CidadeServico,
    EstadoServico
  ]
})
export class SignupPageModule {}
