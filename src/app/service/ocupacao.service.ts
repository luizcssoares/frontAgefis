import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ocupacao } from '../model/ocupacao.model';
import { environment } from '../../environments/environment';

@Injectable()
 
/**
* Service Ocupaacao
*/
export class OcupacaoService {
 
    private apiUrl = environment.urlOcupacao;  // URL para web api
    //private apiUrl = 'http://luizcssoares.gear.host/api/produto';  // URL para web api
    
    ocupacao : Ocupacao;
    selectedOcupacao : Ocupacao;
    ocupacaoList : Ocupacao[];
     
    constructor(private http: HttpClient) { }
    
    /**
	* Listando vagas
    */
   
	getOcupacoes(){ 
        return this.http.get<Ocupacao[]>(this.apiUrl);                       
    }
    
    getOcupacaoById(id: number) {
        //alert(this.http.get<Produto>(this.apiUrl + '/' + id));
        return this.http.get<Ocupacao>(this.apiUrl + '/' + id);
    }
	    
    deleteOcupacao(id: number) {        
        return this.http.delete(this.apiUrl + '/' + id);
    }
    
    addOcupacao(ocupacao: Ocupacao) {
        return this.http.post(this.apiUrl, ocupacao);
    }
       
    updateOcupacao(ocupacao: Ocupacao) 
    {
        return this.http.put(this.apiUrl + '/' + ocupacao.id, ocupacao);        
    }

    editOcupacao(ocupacao: Ocupacao) {
        this.selectedOcupacao = Object.assign({}, ocupacao);;
    }        
}