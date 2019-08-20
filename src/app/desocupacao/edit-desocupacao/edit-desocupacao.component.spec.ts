import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesocupacaoComponent } from './edit-desocupacao.component';

describe('EditDesocupacaoComponent', () => {
  let component: EditDesocupacaoComponent;
  let fixture: ComponentFixture<EditDesocupacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDesocupacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDesocupacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
