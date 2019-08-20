import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VagaService} from "../../service/vaga.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-vaga',
  templateUrl: './add-vaga.component.html',
  styleUrls: ['./add-vaga.component.css']
})
export class AddVagaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private vagaService: VagaService) { }
  
  sucesso: boolean = false; 
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    //this.produtoService.addProduto(this.addForm.value)
    this.vagaService.addVaga(form.value)
      .subscribe( data => {
        this.router.navigate(['list-vaga']);
      });
      this.sucesso = true;
  }

}