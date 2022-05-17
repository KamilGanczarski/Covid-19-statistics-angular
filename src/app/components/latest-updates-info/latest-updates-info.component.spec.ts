import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestUpdatesInfoComponent } from './latest-updates-info.component';

describe('LatestUpdatesInfoComponent', () => {
  let component: LatestUpdatesInfoComponent;
  let fixture: ComponentFixture<LatestUpdatesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestUpdatesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestUpdatesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
