import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { EstadoDTO } from "../../models/estado.dto";
//Classe de serviço que pode ser injetado em outras classes
//Isso eu digo com a anotação abaixo
@Injectable()
export class EstadoServico {

    constructor(public http: HttpClient) {

    }

    findAll() : Observable<EstadoDTO[]> {
       
        return this.http.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}/estados`);
    }
}