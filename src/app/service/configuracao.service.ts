import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuracao } from '../model/configuracao.model';

@Injectable()
 
/**
* Service Configuracao
*/
export class ConfiguracaoService {
 
    private apiUrl = 'http://localhost:8080/api/config';  // URL para web api
    //private apiUrl = 'http://luizcssoares.gear.host/api/produto';  // URL para web api
    
    configuracao : Configuracao;
    selectedConfiguracao : Configuracao;
    configuracaoList : Configuracao[];
     
    constructor(private http: HttpClient) { }
    
    /**
	* Listando desocupacoes
    */
   
	getConfiguracoes(){ 
        return this.http.get<Configuracao[]>(this.apiUrl);                       
    }
    
    getConfiguracaoById(id: number) {
        //alert(this.http.get<Produto>(this.apiUrl + '/' + id));
        return this.http.get<Configuracao>(this.apiUrl + '/' + id);
    }
	    
    deleteConfiguracao(id: number) {        
        return this.http.delete(this.apiUrl + '/' + id);
    }
    
    addConfiguracao(configuracao: Configuracao) {
        return this.http.post(this.apiUrl, configuracao);
    }
       
    updateConfiguracao(configuracao:Configuracao) 
    {
        return this.http.put(this.apiUrl + '/' + configuracao.id, configuracao);        
    }

    editConfiguracao(configuracao: Configuracao) {
        this.selectedConfiguracao = Object.assign({}, configuracao);;
    }        
}