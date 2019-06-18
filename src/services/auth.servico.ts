import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class AuthServico {

    constructor(public http: HttpClient) {
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
}