import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthServico } from '../../services/auth.servico';

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

  //Objeto do tipo credenciais
  //Colocando vázio pois vou fazer o bidding desse objeto com os valores do campo
  //Para realizar a validação do Login
  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };


  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthServico) {
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

  ionViewDidEnter() {
    //Copiar o login para cá, e modificar algumas coisas
    this.auth.refreshToken()
    .subscribe(response => {
      //Quando eu fizer o login vai ter que está amazernado lá no localStorage
      //O meu token!, o metodo successfullLogin é quando deu certo o login
      this.auth.successfullLogin(response.headers.get('Authorization'));
      this.navCtrl.push('CategoriasPage');
    },
    error => {});
    
  }



  //Metodo login sendo criado
  /*abrir a pagina de categorias
    //navegando de uma pagina para outra, utiliza o NavController 
    //que já está injetado no contrutor
    //No Ionic e no Angular quando precisamos injetar uma instancia
    //de um objeto em uma classe, basta declarar o objeto como parametro
    //Do Cosntrutor.
    //vou utilizar o metodo push que é impilhar uma pagina em cima da outra.
    //Metodo de navegação da Home para CategoriasPage 
    
    Testando o envio de dados pelo login, que é quando realiza o click
    
    Agora no metodo login vou chamar o Authenticate
    passando o creds como parametro e vou me inscrever com o subscribe
    se a resposta vier com sucesso, eu vou imprimir no console
    essa resposta .get('Authorization')
    Para verificar se estou acessando esse cabeçalho que vai vir com o token para mim
    Depois vou chamar a pagina de Categorias, ou seja se fizer o login

    ou se der erro eu retorno o corpo vázio
    */

  login() {
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      //Quando eu fizer o login vai ter que está amazernado lá no localStorage
      //O meu token!, o metodo successfullLogin é quando deu certo o login
      this.auth.successfullLogin(response.headers.get('Authorization'));
      this.navCtrl.push('CategoriasPage');
    },
    error => {});
    
  }

}
