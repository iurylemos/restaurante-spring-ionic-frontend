import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageServico } from "./storage.servico";
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthServico {

    //Extraindo um email do meu token
    //Criando um objeto jwtHelder do tipo JwtHelder
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient, public storage: StorageServico) {
        //Para fazer a requisição vou ter que importar o httpClient
    }

    authenticate(creds : CredenciaisDTO) {
        //Ele tem que retornar o http pois ele vai retornar
        //O Observable da Resposta..
        //Aqui vai ser a requisição, como estou inserindo é o POST
        //No Post o primeiro parametro é a URL do LOCALHOST
        //2º PARAMETRO É A VARIAVEL QUE CONTEM OS DADOS
        //3º PARAMETRO OBJETO ONDE ESPECIFICAR ALGUMAS COISAS DA REQUISIÇÃO
        //Observe a response, pois vou ter que pegar o header da resposta
        //Ou seja, eessa requisição vai me retornar um objeto do tipo resposta
        //Dessa forma vou ter acesso ao header.
        //Outra coisa que vou especificar aqui é o responseType
        //Que vai ser um text e não JSON
        //Isso por que o meu ENDPOINT de login me retorna uma resposta de corpo vázio
        //Como essa resposta de corpo vázio eu tenho que colocar então que ela vai ser do tipo texto
        //Para que o meu framework não tente fazer um Parse no JSON
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: `response`,
                responseType: 'text'

            });
    }

    successfullLogin(authorizationValue : string) {
        //Retirando o Bearer quando fizer o login e receber o Token
        //Boto o substring 7, para ele pegar do 7 em diante.
        let tok = authorizationValue.substring(7);
        //criar a variavel user que vai valer o token com o valor tok.
        //que criei acima para valer o Token que está vindo no parametro

        //Qual token? é o tok, e botar o .sub que faz pegar o email
        let user : LocalUser = {
            token : tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        //Para guar o meu usário no localStorage preciso instanciar
        //A classe dela no construtor
        //com isso eu guardo o meu usário no localStorage
        this.storage.setLocalUser(user);
    }

    //metodo logout vai ser ir no localStorage e remover o usuário
    logout() {
        this.storage.setLocalUser(null);
    }
}