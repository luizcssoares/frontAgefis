import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesocupacaoComponent } from './list-desocupacao.component';

describe('ListDesocupacaoComponent', () => {
  let component: ListDesocupacaoComponent;
  let fixture: ComponentFixture<ListDesocupacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDesocupacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesocupacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
