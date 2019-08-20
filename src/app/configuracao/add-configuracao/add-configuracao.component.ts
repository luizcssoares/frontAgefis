import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConfiguracaoService} from "../../service/configuracao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-configuracao',
  templateUrl: './add-configuracao.component.html',
  styleUrls: ['./add-configuracao.component.css']
})
export class AddConfiguracaoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private configuracaoService: ConfiguracaoService) { }

  sucesso: boolean = false; 
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      valor: ['', Validators.required],
      data: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    //this.produtoService.addProduto(this.addForm.value)
    this.configuracaoService.addConfiguracao(form.value)
      .subscribe( data => {
        this.router.navigate(['list-configuracao']);
      });
      this.sucesso = true;
  }

}
