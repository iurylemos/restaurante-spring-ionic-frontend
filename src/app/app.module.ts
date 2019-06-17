import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

/*
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
