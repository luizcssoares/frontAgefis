import { Component, OnInit } from '@angular/core';
import { OcupacaoService } from '../../service/ocupacao.service';
import { Ocupacao } from '../../model/ocupacao.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-ocupacao',
  templateUrl: './list-ocupacao.component.html',
  styleUrls: ['./list-ocupacao.component.css']
})
export class ListOcupacaoComponent implements OnInit {

  ocupacoes: Ocupacao[];    
  ocupacao: Ocupacao;      
        
  constructor(private router: Router, private ocupacaoService: OcupacaoService) { }

  ngOnInit() {
    this.ocupacaoService.getOcupacoes()
    .subscribe( data => {
      this.ocupacoes = data;
    });
  }

  deleteOcupacao(ocupacao: Ocupacao): void {          
    this.ocupacaoService.deleteOcupacao(ocupacao.id)
      .subscribe( () => {
        this.ocupacoes = this.ocupacoes.filter(u => u !== ocupacao);
      })     
  };

  editOcupacao(ocupacao: Ocupacao): void {
    localStorage.removeItem("ocupacaoId");
    localStorage.setItem("ocupacaoId", ocupacao.id.toString());
    this.router.navigate(['edit-ocupacao']);
  };

  addOcupacao(): void {
    this.router.navigate(['add-ocupacao']);
  };  

}
