import { Component, OnInit } from '@angular/core';
import { ConfiguracaoService } from '../../service/configuracao.service';
import { Configuracao } from '../../model/configuracao.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-configuracao',
  templateUrl: './list-configuracao.component.html',
  styleUrls: ['./list-configuracao.component.css']
})
export class ListConfiguracaoComponent implements OnInit {
  
  configuracoes: Configuracao[];    
  configuracao: Configuracao;      
        
  constructor(private router: Router, private configuracaoService: ConfiguracaoService) { }

  ngOnInit() {
    this.configuracaoService.getConfiguracoes()
    .subscribe( data => {
      this.configuracoes = data;
    });
  }

  deleteConfiguracao(configuracao: Configuracao): void {          
    this.configuracaoService.deleteConfiguracao(configuracao.id)
      .subscribe( () => {
        this.configuracoes = this.configuracoes.filter(u => u !== configuracao);
      })     
  };

  editConfiguracao(configuracao: Configuracao): void {
    localStorage.removeItem("configuracaoId");
    localStorage.setItem("configuracaoId", configuracao.id.toString());
    this.router.navigate(['edit-configuracao']);
  };

  addConfiguracao(): void {
    this.router.navigate(['add-configuracao']);
  };  

}
