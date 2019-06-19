import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageServico } from '../../services/storage.servico';
import { ClienteDTO } from '../../models/clientes.dto';
import { ClienteServico } from '../../services/domain/cliente.servico';
import { API_CONFIG } from '../../config/api.config';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  //Dado disponível do controlador
  cliente : ClienteDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: StorageServico,
    public clienteServico: ClienteServico) {
  }

  //Quando cria uma pagina utilizando o CLI
  //Ele já cria esse metodo abaixo que é para quando a pagina for executada

  ionViewDidLoad() {
    //Se existir esse localUser essa variavel vai está valendo o objeto JSON
    //Com isso eu pego o usuario
    let localUser = this.storage.getLocalUser();
    //Se localUser tem alguma coisa e se tem o campo email
    if(localUser && localUser.email) {
      //Pego o email do usuario
      //Passo para o findBy o email acima e me inscrevo (subscribe)
      this.clienteServico.findByEmail(localUser.email)
      .subscribe(response => {
        //Atribuir no meu objeto cliente essa responsta que chegou
        //Pois vai ser um cliente DTO
        this.cliente = response;
        //Buscar minha imagem do S3
        this.getImageIfExists();
      },
      error => {
        if(error.status == 403) {
          //se o erro for igual o 403 vou redirecionar o usuário para a page 403
          this.navCtrl.setRoot('HomePage');
        }
      });
    }else {
      //Se acontecer algum problema na hora de obter o usuário logado
      //rediciona para a pagina Principal
      this.navCtrl.setRoot('HomePage');
    }
  }

  //Testando se a imagem existe.
  getImageIfExists() {
    //Vou no clienteServico e chamo o metodo para buscar no bucket pelo id
    this.clienteServico.getImageFromBucket(this.cliente.id)
    .subscribe(response => {
      //Se deu certo é por que existe então atribuo ao meu imageUrl a imagem
      this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
    },
    error => {});
  }

}
