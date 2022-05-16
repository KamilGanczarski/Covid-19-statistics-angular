import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeBtnComponent } from './scope-btn.component';

describe('ScopeBtnComponent', () => {
  let component: ScopeBtnComponent;
  let fixture: ComponentFixture<ScopeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopeBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
