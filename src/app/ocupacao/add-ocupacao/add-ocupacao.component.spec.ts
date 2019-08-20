import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOcupacaoComponent } from './add-ocupacao.component';

describe('AddOcupacaoComponent', () => {
  let component: AddOcupacaoComponent;
  let fixture: ComponentFixture<AddOcupacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOcupacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOcupacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
