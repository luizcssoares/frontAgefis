import { Component, OnInit } from '@angular/core';
import { Desocupacao } from '../../model/desocupacao.model';
import { DesocupacaoService } from "../../service/desocupacao.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first} from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-desocupacao',
  templateUrl: './edit-desocupacao.component.html',
  styleUrls: ['./edit-desocupacao.component.css']
})
export class EditDesocupacaoComponent implements OnInit {

  desocupacao: Desocupacao;
  editForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private router: Router, private desocupacaoService: DesocupacaoService) { }

  ngOnInit() {
    let desocupacaoId = localStorage.getItem("desocupacaoId");
    
    if(!desocupacaoId) {
      alert("Invalid action.")
      this.router.navigate(['list-desocupacao']);
      return;
    }

    this.editForm = this.formBuilder.group({      
      id: [],
      idvaga: ['', Validators.required],
      idconfig: ['', Validators.required],
      saida: ['', Validators.required],      
      hora: ['', Validators.required],
      valor: ['', Validators.required]     
    });

    this.desocupacaoService.getDesocupacaoById(+desocupacaoId)      
      .subscribe( data => {
      this.editForm.setValue(data);
      //alert(produtoId);
      });
  }

  onSubmit() {
    this.desocupacaoService.updateDesocupacao(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-desocupacao']);
        },
        error => {
          alert(error);
        });
  }

}
