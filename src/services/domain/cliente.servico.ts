import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ClienteDTO } from "../../models/clientes.dto";
import { API_CONFIG } from "../../config/api.config";
import { StorageServico } from "../storage.servico";

@Injectable()
export class ClienteServico {


    constructor (public http: HttpClient, public storage: StorageServico) {

    }

    //Criar o metodo que recebe o email como argumento e me retorna um
    //Observable de ClienteDTO
    findByEmail(email: string) : Observable<ClienteDTO> {
        //Cabeçalho que vem o token e colocando na variavel token
        //let token = this.storage.getLocalUser().token;
        //Header que vou passar
        //Preciso instancia um objeto do HttpHeaders
        //Boto o nome do header que é o Authorization
        //Boto o nome do Token que eu peguei aqui em cima.
        //E esse vai ser o cabeçalho que vou mandar para a requisição.
        //let authHeader = new HttpHeaders({'Authorization' : 'Bearer ' + token});




        //No parentes eu coloco a URL
        //Vai ser o endereço básico da minha API / clientes/email?RECEBENDO um value
        //QUe é o email que veio como parametro nesse metodo
        //No segundo argumento eu passo o token (CABEÇALHO) para a requisição
        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    //Buscando a imagem lá no BUCKET do S3
    //Any é o tipo do TypeScript que casa com qualquer coisa
    getImageFromBucket(id: string) : Observable<any> {
        //Motando a URL com o cp que é o prefixo lá no S3
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        //faço a requisição get e retorno o blob pois vai ser uma imagem
        //E não um JSON
        return this.http.get(url, {responseType : 'blob'});
    }
}