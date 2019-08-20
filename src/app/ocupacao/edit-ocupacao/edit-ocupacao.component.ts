import { Component, OnInit } from '@angular/core';
import { Ocupacao } from '../../model/ocupacao.model';
import { OcupacaoService } from "../../service/ocupacao.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first} from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-ocupacao',
  templateUrl: './edit-ocupacao.component.html',
  styleUrls: ['./edit-ocupacao.component.css']
})
export class EditOcupacaoComponent implements OnInit {

  ocupacao: Ocupacao;
  editForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private router: Router, private ocupacaoService: OcupacaoService) { }

  ngOnInit() {

    let ocupacaoId = localStorage.getItem("ocupacaoId");
    
    if(!ocupacaoId) {
      alert("Invalid action.")
      this.router.navigate(['list-ocupacao']);
      return;
    }    

    this.editForm = this.formBuilder.group({      
      id: [],
      idvaga: ['', Validators.required],
      numplaca: ['', Validators.required],
      entrada: ['', Validators.required],
      hora: ['', Validators.required],      
    });

    this.ocupacaoService.getOcupacaoById(+ocupacaoId)      
      .subscribe( data => {
      this.editForm.setValue(data);
      //alert(produtoId);
      });
  }

  onSubmit() {
    this.ocupacaoService.updateOcupacao(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-ocupacao']);
        },
        error => {
          alert(error);
        });
  }

}
