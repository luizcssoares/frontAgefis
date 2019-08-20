import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../../service/financeiro.service';
import { Financeiro } from '../../model/financeiro.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-financeiro',
  templateUrl: './list-financeiro.component.html',
  styleUrls: ['./list-financeiro.component.css']
})
export class ListFinanceiroComponent implements OnInit {

  financas: Financeiro[];    
  financeiro: Financeiro;      
        
  constructor(private router: Router, private financeiroService: FinanceiroService) { }

  ngOnInit() {
    this.financeiroService.getFinancas()
      .subscribe( data => {
        this.financas = data;
      });
  }

}
