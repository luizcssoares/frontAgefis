import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Financeiro } from '../model/financeiro.model';
import { environment } from '../../environments/environment';

@Injectable()
 
/**
* Service Finaceiro de ocupacao de Vaga
*/
export class FinanceiroService {
 
    private apiUrl = environment.urlFinanceiro;  // URL para web api
    //private apiUrl = 'http://luizcssoares.gear.host/api/produto';  // URL para web api
    
    finaceiro : Financeiro;
    selectedFinanceiro : Financeiro;
    financeiroList : Financeiro[];
     
    constructor(private http: HttpClient) { }
    
    /**
	* Listando financeiros de ocupacao de vagas
    */
   
	getFinancas(){ 
        return this.http.get<Financeiro[]>(this.apiUrl);                       
    }
    	    
    deleteVaga(id: number) {        
        return this.http.delete(this.apiUrl + '/' + id);
    }
}