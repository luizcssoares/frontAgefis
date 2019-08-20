import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Desocupacao } from '../model/desocupacao.model';
import { environment } from '../../environments/environment';

@Injectable()
 
/**
* Service Descupaacao
*/
export class DesocupacaoService {
 
    private apiUrl = environment.urlDesocupacao;  // URL para web api
    //private apiUrl = 'http://luizcssoares.gear.host/api/produto';  // URL para web api
    
    descocupacao : Desocupacao;
    selectedDesocupacao : Desocupacao;
    desocupacaoList : Desocupacao[];
     
    constructor(private http: HttpClient) { }
    
    /**
	* Listando desocupacoes
    */
   
	getDesocupacoes(){ 
        return this.http.get<Desocupacao[]>(this.apiUrl);                       
    }
    
    getDesocupacaoById(id: number) {
        //alert(this.http.get<Produto>(this.apiUrl + '/' + id));
        return this.http.get<Desocupacao>(this.apiUrl + '/' + id);
    }
	    
    deleteDesocupacao(id: number) {        
        return this.http.delete(this.apiUrl + '/' + id);
    }
    
    addDesocupacao(desocupacao: Desocupacao) {
        return this.http.post(this.apiUrl, desocupacao);
    }
       
    updateDesocupacao(desocupacao: Desocupacao) 
    {
        return this.http.put(this.apiUrl + '/' + desocupacao.id, desocupacao);        
    }

    editDesocupacao(desocupacao: Desocupacao) {
        this.selectedDesocupacao = Object.assign({}, desocupacao);;
    }        
}