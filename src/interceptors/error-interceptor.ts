/*
    O código de um interceptor básico ele é muito peculiar
    ou seja é coisa do framework mesmo.
*/
import { Injectable } from '@Angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; // IMPORTANTE: IMPORT ATUALLIZADO
import { StorageServico } from '../services/storage.servico';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage : StorageServico){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console para testes retirei.
        //console.log("Passou no interpector");
        //catch captura o erro
        return next.handle(req)
        .catch((error, caught) => {

            //declarar uma variavel errorObj recebendo o error
            let errorObj = error;
            //esse errorObj tem o campo error? 
            if(errorObj.error) {
                //Se tiver então eu pego só o campo error
                errorObj = errorObj.error;
            }

            //Convertendo o texto da resposta que é String para Json
            //Se o meu objeto de error não tiver o campo status
            //Significa que isso aqui não é um JSON
            //Pois o status com certeza vem, se o objeto é JSON
            if(!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }

            //Agora é o interceptor que vai ter a responsábilidade
            //De imprimir na tela.
            console.log("Error detectado pelo Interpector:")
            console.log(errorObj);

            //tratamento do erro no erroObj.status
            //como pode ser vários tratamentos vou colocar dentro do switch
            switch(errorObj.status) {
                case 403:
                this.handle403();
                break;
            }

            return Observable.throw(errorObj);
        }) as any;

    }
    
    //tratamento do erro 403
    handle403() {
        //Forçar a limpeza do localStorage
        //Um possivel usuario que está no localStorage está invalido
        //se existir vou limpzar
        
        this.storage.setLocalUser(null);
    }


}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};