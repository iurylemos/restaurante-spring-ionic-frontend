import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { CidadeDTO } from "../../models/cidade.dto";
//Classe de serviço que pode ser injetado em outras classes
//Isso eu digo com a anotação abaixo
@Injectable()
export class CidadeServico {

    constructor(public http: HttpClient) {

    }

    /*
        Só posso ter uma cidade a apartir de um ESTADO, 
        E no backend o recurso está em uma classe só.

    */

    findAll(estado_id : string) : Observable<CidadeDTO[]> {
      
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`);
    }
}