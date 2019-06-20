import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CidadeServico } from '../../services/domain/cidade.servico';
import { EstadoServico } from '../../services/domain/estado.servico';
import { EstadoDTO } from '../../models/estado.dto';
import { CidadeDTO } from '../../models/cidade.dto';

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
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  //Injetando os serviços no construtor para utilizar
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cidadeServico: CidadeServico,
    public estadoServico: EstadoServico) {

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
        cpfOuCnpj : ['86320162023', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
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

  ionViewDidLoad() {
    //Aqui dentro vou carregar os estados e me increver para receber a resposta
    this.estadoServico.findAll().subscribe( response=> {
      //Se ocorrer tudo bem, vou amazenar esses estados que eu busquei nos DTO do tipo coleção.
        this.estados = response;
        //Pegar o primeiro elemento dos estados e atribuir ele na lista das cidades
        //Ou seja na chave estrangeira estado_id do formulário do cidadeDTO
        //chamar o formGroup, controls, ESTADOID que é o nome do meu atributo
        //setando o valor na lista do formulário, na primeira posição
        //e o .id pois é só o código e não o objeto inteiro
        this.formGroup.controls.estadoId.setValue(this.estados[0].id);
        /* 
          Metodo updateCidades() vai servir para buscar as cidades
          de acordo com o estado selecionado.
        */
       this.updateCidades();
    },
    error => { });

  }

  updateCidades() {
    
    //Para pegar ele, eu dentro uma variavel, e falo que vai ser igual ao
    //Form group, valor do estadoId;
    //Pego o código do está que está litado lá na lista do HTML do formulário
    let estado_id = this.formGroup.value.estadoId;
    //O metodo vai ter que ir no cidadeServico dentro do metodo findall
    //Passando o ID do estado como argumento, vai ser o estado
    //Que está estado que está selecionado lá no meu componente da lista de Estados
    //Que fiz no formGroup
    //Feito isso, vou me inscrever para receber a resposta

    this.cidadeServico.findAll(estado_id).subscribe(response => {
      //Se chegar a resposta correta, a cidade recebe a resposta
      this.cidades = response;
      //Vou fazer um macete para deselecionar a cidade que estava
      //eventualmente selecionada lá no formulário
      //Por que?
      //Como acabou de mudar de estado lá em cima no formGroup
      //Eu vou querer não tenha nenhuma cidade selecionada na lista de cidades
      this.formGroup.controls.cidadeId.setValue(null);
    }, 
    error => { });


  }



  signupUser() {
    console.log("Enviou o criar conta");
  }
}
