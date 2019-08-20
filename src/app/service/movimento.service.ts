import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimento } from '../model/movimento.model';
import { environment } from '../../environments/environment';

@Injectable()
 
/**
* Service Movimento de ocupacao / desocupacao de vagas
*/
export class MovimentoService {
 
    private apiUrl = environment.urlMovimento;  // URL para web api
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