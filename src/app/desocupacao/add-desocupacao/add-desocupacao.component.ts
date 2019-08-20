import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DesocupacaoService} from "../../service/desocupacao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-desocupacao',
  templateUrl: './add-desocupacao.component.html',
  styleUrls: ['./add-desocupacao.component.css']
})
export class AddDesocupacaoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private desocupacaoService: DesocupacaoService) { }

  sucesso: boolean = false; 
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      idvaga: ['', Validators.required],
      idconfig: ['', Validators.required],
      saida: ['', Validators.required],      
      hora: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    //this.produtoService.addProduto(this.addForm.value)
    this.desocupacaoService.addDesocupacao(form.value)
      .subscribe( data => {
        this.router.navigate(['list-desocupacao']);
      });
      this.sucesso = true;
  }

}
