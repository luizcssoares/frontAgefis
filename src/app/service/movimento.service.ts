import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimento } from '../model/movimento.model';

@Injectable()
 
/**
* Service Movimento de ocupacao / desocupacao de vagas
*/
export class MovimentoService {
 
    private apiUrl = 'http://localhost:8080/api/relatorio/movimento';  // URL para web api
    //private apiUrl = 'http://luizcssoares.gear.host/api/produto';  // URL para web api
    
    movimento : Movimento;
    selectedMovimento : Movimento;
    movimentoList : Movimento[];
     
    constructor(private http: HttpClient) { }
    
    /**
	* Listando vagas
    */
   
	getMovimentos(){ 
        return this.http.get<Movimento[]>(this.apiUrl);                       
    }     
}