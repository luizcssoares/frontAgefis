import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVagaComponent } from './list-vaga.component';

describe('ListVagaComponent', () => {
  let component: ListVagaComponent;
  let fixture: ComponentFixture<ListVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
