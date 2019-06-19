import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  //Controlador de formulário
  //Para utilizalo preciso instanciar um tipo FormBuilder no construtor
  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      //instanciando o FormGroup
      this.formGroup = this.formBuilder.group({
        //O que vou colocar nesse objeto?
        //O mesmo atributos que tem no formulário
        //No atributo nome eu coloco o primerio campo é o valor
        //E no segundo eu quero dizer que ele é obrigatório 
        //E assim eu coloco o Validators.
        //Minimo vai ser 5
        nome: ['Joaquim',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['joaquim@gmail.com',[Validators.required, Validators.email]],
        tipo: ['1', [Validators.required]],
        cpfOuCnpj : ['86320162023', [Validators.required, Validators.minLength(11), Validators.maxLength(40)]],
        senha: ['123', [Validators.required]],
        longadouro : ['Rua 103', [Validators.required]],
        numero : ['43', [Validators.required]],
        complemento : ['Apto 3', []],
        bairro : ['Mondubim', []],
        cep : ['6038383832', [Validators.required]],
        telefone1 : ['9822882822', [Validators.required]],
        telefone2 : ['', []],
        telefone3 : ['',[]],
        estadoId : [null, [Validators.required]],
        cidadeId : [null, [Validators.required]]
      });

  }

  signupUser() {
    console.log("Enviou o criar conta");
  }
}
