import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tempomedio } from '../model/tempomedio.model';

@Injectable()
 
/**
* Service Tempomedio
*/
export class TempomedioService {
 
    private apiUrl = 'http://localhost:8080/api/relatorio/tempomedio';  // URL para web api
    //private apiUrl = 'http://luizcssoares.gear.host/api/produto';  // URL para web api
    
    tempomedio : Tempomedio;
    selectedTempo : Tempomedio;
    tempomedioList : Tempomedio[];
     
    constructor(private http: HttpClient) { }
    
    /**
	* Listando tempo medio de ocupacao de vagas
    */
   
	getTempomedio(){ 
        return this.http.get<Tempomedio[]>(this.apiUrl);                       
    }
    
    getTempomedioById(id: number) {
        //alert(this.http.get<Produto>(this.apiUrl + '/' + id));
        return this.http.get<Tempomedio>(this.apiUrl + '/' + id);
    }	        
}