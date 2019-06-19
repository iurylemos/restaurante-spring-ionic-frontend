/*
    O código de um interceptor básico ele é muito peculiar
    ou seja é coisa do framework mesmo.
*/
import { Injectable } from '@Angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; // IMPORTANTE: IMPORT ATUALLIZADO
import { StorageServico } from '../services/storage.servico';
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public storage: StorageServico) {
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //declarando variavel recebendo o Token do StorageService
        let localUser = this.storage.getLocalUser();
        //Não posso deixar enviar um erro para o meu S3
        //Apenas para o servidor que é o local host e está na variavel
        //baseUrl
        //Vou pegar o tamanho, para comprar se os primeiros caracteres
        //da URL que veio na requisição, se bate com o http:localhost:8080
        //Se isso acontecer é por que a minha requisição é para a API
        let N = API_CONFIG.baseUrl.length;
        //Testar se estou requisitando para a minha API
        //Pegando o objeto da requisição REQ, recortando a do 0 ao N
        //Se isso for igual ao API_CONFIG.baseUrl é por que isso é para minha API
        let requestToAPI = req.url.substring(0, N) == API_CONFIG.baseUrl;

        //testando se tem token e se a requisição para a minha API e não pro S3
        if(localUser && requestToAPI) {
            //ai sim vou inserir o cabeçalho na requisição
            //copia da requisição do req que veio como parametro
            // só que a gora acrescentando o header Authorization
            //Com o bearer e o token
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
            return next.handle(authReq);
        }else {
            //Se não existir,vou propagar a requisição original sem cabeçalho
           return next.handle(req);
        }
      
    }
}

//provider do Interpector
export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};