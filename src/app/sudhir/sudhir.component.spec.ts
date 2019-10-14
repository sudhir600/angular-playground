import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudhirComponent } from './sudhir.component';

describe('SudhirComponent', () => {
  let component: SudhirComponent;
  let fixture: ComponentFixture<SudhirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudhirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudhirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
