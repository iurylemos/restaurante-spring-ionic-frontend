import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageServico } from '../../services/storage.servico';

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

  email: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: StorageServico) {
  }

  //Quando cria uma pagina utilizando o CLI
  //Ele já cria esse metodo abaixo que é para quando a pagina for executada

  ionViewDidLoad() {
    //Se existir esse localUser essa variavel vai está valendo o objeto JSON
    let localUser = this.storage.getLocalUser();
    //Se localUser tem alguma coisa e se tem o campo email
    if(localUser && localUser.email) {
      this.email = localUser.email;
    }
  }

}
