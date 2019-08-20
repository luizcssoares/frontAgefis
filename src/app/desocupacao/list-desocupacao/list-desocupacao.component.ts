import { Component, OnInit } from '@angular/core';
import { DesocupacaoService } from '../../service/desocupacao.service';
import { Desocupacao } from '../../model/desocupacao.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-desocupacao',
  templateUrl: './list-desocupacao.component.html',
  styleUrls: ['./list-desocupacao.component.css']
})
export class ListDesocupacaoComponent implements OnInit {

  desocupacoes: Desocupacao[];    
  desocupacao: Desocupacao;      
        
  constructor(private router: Router, private desocupacaoService: DesocupacaoService) { }

  ngOnInit() {
    this.desocupacaoService.getDesocupacoes()
    .subscribe( data => {
      this.desocupacoes = data;
    });
  }

  deleteDesocupacao(desocupacao: Desocupacao): void {          
    this.desocupacaoService.deleteDesocupacao(desocupacao.id)
      .subscribe( () => {
        this.desocupacoes = this.desocupacoes.filter(u => u !== desocupacao);
      })     
  };

  editDesocupacao(desocupacao: Desocupacao): void {
    localStorage.removeItem("desocupacaoId");
    localStorage.setItem("desocupacaoId", desocupacao.id.toString());
    this.router.navigate(['edit-desocupacao']);
  };

  addDesocupacao(): void {
    this.router.navigate(['add-desocupacao']);
  };  
}
