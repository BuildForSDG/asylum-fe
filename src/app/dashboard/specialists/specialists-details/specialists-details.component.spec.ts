import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistsDetailsComponent } from './specialists-details.component';

describe('SpecialistsDetailsComponent', () => {
  let component: SpecialistsDetailsComponent;
  let fixture: ComponentFixture<SpecialistsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
