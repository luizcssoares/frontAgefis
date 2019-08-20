import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovimentoComponent } from './list-movimento.component';

describe('ListMovimentoComponent', () => {
  let component: ListMovimentoComponent;
  let fixture: ComponentFixture<ListMovimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMovimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
