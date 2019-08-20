import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTempomedioComponent } from './list-tempomedio.component';

describe('ListTempomedioComponent', () => {
  let component: ListTempomedioComponent;
  let fixture: ComponentFixture<ListTempomedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTempomedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTempomedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
