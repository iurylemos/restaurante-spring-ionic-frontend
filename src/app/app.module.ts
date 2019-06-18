import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaServico } from '../services/domain/categoria.servico';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaServico
  ]
})

/*
  Coloquei aqui a cima o CategoriaServico pois ele pode ser utilizado
  em mais de uma página, pois ele é muito util, ou seja , ele pode servir
  toda aaplicação



  Estou colocando o HttpClienteModule aqui pois ele vale para a toda aplicação
  Tudo que é colado aqui vai para toda a aplicação
  OBS: Tenho que colocar depois do BrowserModule


  Modulo aqui é uma classe.
  Tem a definição aqui abaixo de uma classe
  Essa classe não tem corpo nenhum, então é só abre e fecha aspas

  Quando voc~e quer que uma classe seja importada por outro arquivo
  você tem que colocar a palavra export

  Porém o mais importante aqui é o decortador
  que é o @NGModule
  Decorator é uma anotação que vai ter configurações para alterar
  a minha classe.
  Oque faz essa classe ser um modulo é o meu @NgModule
  
*/
export class AppModule {}
