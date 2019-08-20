import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OcupacaoService} from "../../service/ocupacao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-ocupacao',
  templateUrl: './add-ocupacao.component.html',
  styleUrls: ['./add-ocupacao.component.css']
})
export class AddOcupacaoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private ocupacaoService: OcupacaoService) { }

  sucesso: boolean = false; 
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      idvaga: ['', Validators.required],
      numplaca: ['', Validators.required],
      entrada: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    //this.produtoService.addProduto(this.addForm.value)
    this.ocupacaoService.addOcupacao(form.value)
      .subscribe( data => {
        this.router.navigate(['list-ocupacao']);
      });
      this.sucesso = true;
  }

}
