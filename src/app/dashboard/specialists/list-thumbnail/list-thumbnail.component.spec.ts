import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThumbnailComponent } from './list-thumbnail.component';

describe('ListThumbnailComponent', () => {
  let component: ListThumbnailComponent;
  let fixture: ComponentFixture<ListThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
