import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";
import { STORAGE_KEYS } from "../config/storage_keys.config";

//Serviço para salvar e obter o usuário logado
@Injectable()
export class StorageServico {

    //Metodo para retornar o usuário logado
    getLocalUser() : LocalUser {
        //localStorage é acessivel, e ai vou chamar o nome da chave
        //E com isso eu pego o valor que está lá no LocalStorage
        //Com a chave localUser
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        //testando se o valor existe
        if(usr == null) {
            return null;
        }else {
            //Como ele vem em forma de String, eu converto para JSON
            return JSON.parse(usr);
        }

    }
    //Metodo que amazerna no Storage
    //Serviço responsável por obter ou amazenar um objeto do tipo localUser
    setLocalUser(obj : LocalUser) {
        if(obj == null) {
            //Significa que quero jogar um nulo lá no STORAGE
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }else {
            //Caso contrário ai eu vou amazenar o objeto lá no STORAGE
            //Seto o ITEM, e no outro parametro é o valor da chave
            //que é o objeto convertido para String, ai no caso eu tenho que fazer
            //o procedimento inverso, de JSON para STRING
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }

    }
}