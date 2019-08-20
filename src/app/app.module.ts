
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { VagaService } from './service/vaga.service';
import { ListVagaComponent } from './vaga//list-vaga/list-vaga.component';
import { AddVagaComponent } from './vaga/add-vaga/add-vaga.component';
import { EditVagaComponent } from './vaga/edit-vaga/edit-vaga.component';

import { AddOcupacaoComponent } from './ocupacao/add-ocupacao/add-ocupacao.component';
import { EditOcupacaoComponent } from './ocupacao/edit-ocupacao/edit-ocupacao.component';
import { ListOcupacaoComponent } from './ocupacao/list-ocupacao/list-ocupacao.component';
import { OcupacaoService } from './service/ocupacao.service';

import { ListDesocupacaoComponent } from './desocupacao/list-desocupacao/list-desocupacao.component';
import { DesocupacaoService } from './service/desocupacao.service';
import { AddDesocupacaoComponent } from './desocupacao/add-desocupacao/add-desocupacao.component';
import { EditDesocupacaoComponent } from './desocupacao/edit-desocupacao/edit-desocupacao.component';
import { ListConfiguracaoComponent } from './configuracao/list-configuracao/list-configuracao.component';
import { ConfiguracaoService } from './service/configuracao.service';
import { AddConfiguracaoComponent } from './configuracao/add-configuracao/add-configuracao.component';
import { ListMovimentoComponent } from './relatorio/list-movimento/list-movimento.component';
import { ListFinanceiroComponent } from './relatorio/list-financeiro/list-financeiro.component';
import { ListTempomedioComponent } from './relatorio/list-tempomedio/list-tempomedio.component';
import { MovimentoService } from './service/movimento.service';
import { FinanceiroService } from './service/financeiro.service';
import { TempomedioService } from './service/tempomedio.service';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVagaComponent,
    AddVagaComponent,
    EditVagaComponent,
    AddOcupacaoComponent,
    EditOcupacaoComponent,
    ListOcupacaoComponent,
    ListDesocupacaoComponent,
    AddDesocupacaoComponent,
    EditDesocupacaoComponent,
    ListConfiguracaoComponent,
    AddConfiguracaoComponent,
    ListMovimentoComponent,
    ListFinanceiroComponent,
    ListTempomedioComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [VagaService, OcupacaoService, DesocupacaoService, ConfiguracaoService, TempomedioService, MovimentoService, FinanceiroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
