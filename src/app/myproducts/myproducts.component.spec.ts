import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproductsComponent } from './myproducts.component';

describe('MyproductsComponent', () => {
  let component: MyproductsComponent;
  let fixture: ComponentFixture<MyproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
