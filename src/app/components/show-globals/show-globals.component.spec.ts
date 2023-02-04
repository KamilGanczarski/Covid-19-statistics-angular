import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGlobalsComponent } from './show-globals.component';

describe('ShowGlobalsComponent', () => {
  let component: ShowGlobalsComponent;
  let fixture: ComponentFixture<ShowGlobalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGlobalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGlobalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
