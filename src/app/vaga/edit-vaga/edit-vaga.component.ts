import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../model/vaga.model';
import { VagaService } from "../../service/vaga.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first} from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-vaga',
  templateUrl: './edit-vaga.component.html',
  styleUrls: ['./edit-vaga.component.css']
})
export class EditVagaComponent implements OnInit {
  vaga: Vaga;
  editForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private router: Router, private vagaService: VagaService) { }

  ngOnInit() {

    let vagaId = localStorage.getItem("vagaId");
    
    if(!vagaId) {
      alert("Invalid action.")
      this.router.navigate(['list-vaga']);
      return;
    }    

    this.editForm = this.formBuilder.group({      
      id: [],
      nome: ['', Validators.required],
      status: ['', Validators.required]      
    });

    this.vagaService.getVagaById(+vagaId)      
      .subscribe( data => {
      this.editForm.setValue(data);
      //alert(produtoId);
      });
  }

  onSubmit() {
    this.vagaService.updateVaga(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-vaga']);
        },
        error => {
          alert(error);
        });
  }

}
