import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOcupacaoComponent } from './list-ocupacao.component';

describe('ListOcupacaoComponent', () => {
  let component: ListOcupacaoComponent;
  let fixture: ComponentFixture<ListOcupacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOcupacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOcupacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
