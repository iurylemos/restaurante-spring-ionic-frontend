import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

/*Esse decotador abaixo que vai contar para minha aplicacao 
que essa classe ela é uma pagina
e vou poder referenciar esse classe pelo nome dela "HomePage"
entre aspas, ou seja na forma de String

Dessa forma vou poder referência a essa classe na forma de String
Ai assim vou ter uma flexibilidade muito grande para trabalhar
com minhas paginas na forma LazyLoadir

*/
@IonicPage()


//Esse decorator abaixo é que faz isso ser o controlador da minha VIEW
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    //Controlador da view do home.html
    //O que tiver de argumento no construtor vai ser injetado na classe

  }
  /*
  ionVieWillEnter() ou seja quando eu entrar na pagina vou desabilitar
  aquela barralateral que é o menu, pois não quero ela na minha tela de login

  e o ionViewDidLeave() é quando eu sair dessa pagina vou habilita-lo 
  novamente, para a pagina categorias ter o seu menu lateral.
  */

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }





  //Metodo login sendo criado
  /*abrir a pagina de categorias
    //navegando de uma pagina para outra, utiliza o NavController 
    //que já está injetado no contrutor
    //No Ionic e no Angular quando precisamos injetar uma instancia
    //de um objeto em uma classe, basta declarar o objeto como parametro
    //Do Cosntrutor.
    //vou utilizar o metodo push que é impilhar uma pagina em cima da outra.
    //Metodo de navegação da Home para CategoriasPage */

  login() {
    this.navCtrl.push('CategoriasPage');
  }

}
