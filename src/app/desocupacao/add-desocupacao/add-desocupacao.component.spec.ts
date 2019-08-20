import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesocupacaoComponent } from './add-desocupacao.component';

describe('AddDesocupacaoComponent', () => {
  let component: AddDesocupacaoComponent;
  let fixture: ComponentFixture<AddDesocupacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesocupacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesocupacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
