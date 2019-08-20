import { NgModule } from '@angular/core';
import { ListVagaComponent } from './vaga/list-vaga/list-vaga.component';
import { AddVagaComponent } from './vaga/add-vaga/add-vaga.component';
import { EditVagaComponent } from './vaga/edit-vaga/edit-vaga.component';

import { ListOcupacaoComponent } from './ocupacao/list-ocupacao/list-ocupacao.component';
import { AddOcupacaoComponent } from './ocupacao/add-ocupacao/add-ocupacao.component';
import { EditOcupacaoComponent } from './ocupacao/edit-ocupacao/edit-ocupacao.component';

import { ListDesocupacaoComponent } from './desocupacao/list-desocupacao/list-desocupacao.component';
import { AddDesocupacaoComponent } from './desocupacao/add-desocupacao/add-desocupacao.component';
import { EditDesocupacaoComponent } from './desocupacao/edit-desocupacao/edit-desocupacao.component';

import { ListConfiguracaoComponent } from './configuracao/list-configuracao/list-configuracao.component';
import { AddConfiguracaoComponent } from './configuracao/add-configuracao/add-configuracao.component';

import { ListMovimentoComponent } from './relatorio/list-movimento/list-movimento.component';
import { ListFinanceiroComponent } from './relatorio/list-financeiro/list-financeiro.component';
import { ListTempomedioComponent } from './relatorio/list-tempomedio/list-tempomedio.component';

import { IndexComponent } from './index/index.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: 'list-vaga',  component: ListVagaComponent },
{ path: 'add-vaga',  component: AddVagaComponent },
{ path: 'edit-vaga',  component: EditVagaComponent },
{ path: 'list-ocupacao',  component: ListOcupacaoComponent },
{ path: 'add-ocupacao',  component: AddOcupacaoComponent },
{ path: 'edit-ocupacao',  component: EditOcupacaoComponent },
{ path: 'list-desocupacao',  component: ListDesocupacaoComponent },
{ path: 'add-desocupacao',  component: AddDesocupacaoComponent },
{ path: 'edit-desocupacao',  component: EditDesocupacaoComponent },
{ path: 'list-configuracao',  component: ListConfiguracaoComponent },
{ path: 'add-configuracao',  component: AddConfiguracaoComponent },
{ path: 'list-movimento',  component: ListMovimentoComponent },
{ path: 'list-financeiro',  component: ListFinanceiroComponent },
{ path: 'list-tempomedio',  component: ListTempomedioComponent },
{ path: '',  component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
