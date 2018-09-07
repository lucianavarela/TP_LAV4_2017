import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitItComponent } from './hit-it.component';

describe('HitItComponent', () => {
  let component: HitItComponent;
  let fixture: ComponentFixture<HitItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
