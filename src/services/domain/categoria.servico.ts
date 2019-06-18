import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { CategoriaDTO } from "../../models/categoria.dto";
//Classe de serviço que pode ser injetado em outras classes
//Isso eu digo com a anotação abaixo
@Injectable()
export class CategoriaServico {

    constructor(public http: HttpClient) {

    }

    findAll() : Observable<CategoriaDTO[]> {
       
        //Metodo responsável por retornar a lista das categorias
        //Ou seja lista de objetos com ID e NOME
        //Que está no CATEGORIA DTO
        //Porém aqui no Angular uma requisição HTTP ela não retorna um OBJ pronto
        //Na verdade a requisição HTTP ela é assicrona, ela é chamada AJAX
        //Então eu tenho que me inscreever para receber a resposta da requisição
        //O Angular ele encapsula esse mecanismo de requisição assicrona
        //Por meio do Observable
        //E o Observable possibilita eu fazer a requisição e aguardar a respota
        //Então no retorno da função aqui
        //Eu tenho que colocar o Observable e a classe dentro dele


        //Como lá está no http lá na requisição igual fiz no postman
        //Vou botar o endereço aqui, e como lá é um GET, coloco aqui tbm
        //E isso daqui faz a chamada lá pro backend
        // return this.http.get("http://localhost:8080/categorias");
        //Mas não vou fazer assim diretamente, pois criei uma variavel
        //global para utilizar no lugar do localhost:8080 
        //Lá na api.config.ts
        //Vou trocar os aspasDUPLAS pela crase
        //A crase aqui no JAVASCRIPT ela permite colocar variaveis
        // no meio do meu String sem precisar concatendando com o +..
        //Tenho que colocar o Get TIPADO, especifico do tipo lista
        //do CategoriaDTO
        //Agora tenho uma função que tá tipada retornando uma lista
        //de CATEGORIADTO
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}