import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyAddressComponent } from './currently-address.component';

describe('CurrentlyAddressComponent', () => {
  let component: CurrentlyAddressComponent;
  let fixture: ComponentFixture<CurrentlyAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentlyAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
