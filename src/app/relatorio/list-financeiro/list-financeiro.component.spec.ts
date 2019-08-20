import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFinanceiroComponent } from './list-financeiro.component';

describe('ListFinanceiroComponent', () => {
  let component: ListFinanceiroComponent;
  let fixture: ComponentFixture<ListFinanceiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFinanceiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
