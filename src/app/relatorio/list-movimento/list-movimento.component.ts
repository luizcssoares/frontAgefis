import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../../service/movimento.service';
import { Movimento } from '../../model/movimento.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-movimento',
  templateUrl: './list-movimento.component.html',
  styleUrls: ['./list-movimento.component.css']
})
export class ListMovimentoComponent implements OnInit {

  movimentos: Movimento[];    
  movimento: Movimento;      
        
  constructor(private router: Router, private movimentoService: MovimentoService) { }

  ngOnInit() {
    this.movimentoService.getMovimentos()
    .subscribe( data => {
      this.movimentos = data;
    });
  }

}
