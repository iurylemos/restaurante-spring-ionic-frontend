import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServico } from '../services/auth.servico';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  /*
  Ele aqui é o controlador da pagina app.html
  toda pagina HTML que é a view ela tem que ter um controlador
  e esse aqui é o controlador
  */
  @ViewChild(Nav) nav: Nav;

  //root page diz quem é a pagina que vai abrir quando iniciar
  //Ele foi declarado do tipo any = é um tipo generico aceita de qualquer tipo.
  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: string}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public auth: AuthServico) {
    this.initializeApp();

    // Lista de itens de Menu
    this.pages = [
      { title: 'Profile', component: 'ProfilePage' },
      { title: 'Categorias', component: 'CategoriasPage' },
      { title: 'Logout', component: ''} 
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  //Fazer o logout do usuário modificando esse openPage, botando os parametros
  //Pois com essa tipagem eu consigo acessar os atributos
  openPage(page : {title: string, component: string}) {
    // Esse metodo é chamado no HTML com o metodo openPage
    //Fazer um switch no page titulo que tem lá no app.html
    switch(page.title) {
      //Tem um metodo logout no authServico
      //E lá no appComponente ts vou injetar o meu authServico
      case 'Logout':
      //Se o titulo for Logout, vou fazer o logout com o token para retirar do amarzenamento
      this.auth.logout();
      this.nav.setRoot('HomePage');
      break;

      default:
      this.nav.setRoot(page.component);
    }
   
  }
}
