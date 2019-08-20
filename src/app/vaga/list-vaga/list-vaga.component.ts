import { Component, OnInit } from '@angular/core';
import { VagaService } from '../../service/vaga.service';
import { Vaga } from '../../model/vaga.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-vaga',
  templateUrl: './list-vaga.component.html',
  styleUrls: ['./list-vaga.component.css']
})
export class ListVagaComponent implements OnInit {
  vagas: Vaga[];    
  vaga: Vaga;      
        
  constructor(private router: Router, private vagaService: VagaService) { }
  
  ngOnInit() {
    this.vagaService.getVagas()
      .subscribe( data => {
        this.vagas = data;
      });
  }

  deleteVaga(vaga: Vaga): void {          
    this.vagaService.deleteVaga(vaga.id)
      .subscribe( () => {
        this.vagas = this.vagas.filter(u => u !== vaga);
      })     
  };

  editVaga(vaga: Vaga): void {
    localStorage.removeItem("vagaId");
    localStorage.setItem("vagaId", vaga.id.toString());
    this.router.navigate(['edit-vaga']);
  };

  addVaga(): void {
    this.router.navigate(['add-vaga']);
  };  
}
