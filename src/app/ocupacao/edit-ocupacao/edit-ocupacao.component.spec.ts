import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOcupacaoComponent } from './edit-ocupacao.component';

describe('EditOcupacaoComponent', () => {
  let component: EditOcupacaoComponent;
  let fixture: ComponentFixture<EditOcupacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOcupacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOcupacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
