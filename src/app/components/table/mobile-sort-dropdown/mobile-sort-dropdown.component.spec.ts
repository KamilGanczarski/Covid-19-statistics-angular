import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSortDropdownComponent } from './mobile-sort-dropdown.component';

describe('MobileSortDropdownComponent', () => {
  let component: MobileSortDropdownComponent;
  let fixture: ComponentFixture<MobileSortDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSortDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSortDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
