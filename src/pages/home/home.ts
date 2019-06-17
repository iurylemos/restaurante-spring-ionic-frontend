import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {
    //Controlador da view do home.html

  }

}
