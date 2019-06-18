import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaServico } from '../../services/domain/categoria.servico';
import { CategoriaDTO } from '../../models/categoria.dto';
import { API_CONFIG } from '../../config/api.config';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public categoriaServico: CategoriaServico) {
  }


  //Bucket de imagens
  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  //Essa vai ser a lista que vai ser exposta no controlador
  //Para o meu template ler os dados
  items: CategoriaDTO[];

  //Quando a pagina terminar de ser carregada vai ser executada o que tiver aqui dentro
  //No angular para você se increver uma chamada assicrona
  //Você tem que colocar o subscribe
  //E dentro do subscribe coloco a função CALLBACK
  //Declaração de função anonima,
  //Primeiro coloco o argumento que a função recebe, pode ser mais de 1
  //Depois coloco a setinha
  //E abro a chaves e dentro da chaves coloco o CORPO da função
  //Essa função anonima é para ser executada quando a resposta da requisição
  //For executada com sucesso
  //Se der erro, vou executar outra função chamada error
  //que vai executar na tela também
  //Console.LOG é a melhor amiga para testar o DADO que tá retornando na requisição
  //Ele imprime no console
  ionViewDidLoad() {
    this.categoriaServico.findAll()
    .subscribe(response => {
      //Não vou mais imprimir no console, eu vou guardar isso em uma variavel
      //Da minha classe para que o meu TemplateHTML possa ler.
      //Vou chama-lo de Itens do tipo categoriaDTO[]; 
      //[] = coleção
      this.items = response;
    },
    error => {
      console.log(error);
    });
  }

  //Criando uma função para botar dentro do subscribe
  //Que é a função CALLBACK
  //Essa função ela recebe uma resposta, e ela imprime na tela.
  //No JavaScript pegamos uma função e passamos ela como parametro
  //De outra função
  //Porém vou criar uma função anônima que é chamada de arrow function
  /*f(response) {
    console.log(response);
  } */

}
