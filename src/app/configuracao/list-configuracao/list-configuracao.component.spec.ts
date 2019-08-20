import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConfiguracaoComponent } from './list-configuracao.component';

describe('ListConfiguracaoComponent', () => {
  let component: ListConfiguracaoComponent;
  let fixture: ComponentFixture<ListConfiguracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConfiguracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
