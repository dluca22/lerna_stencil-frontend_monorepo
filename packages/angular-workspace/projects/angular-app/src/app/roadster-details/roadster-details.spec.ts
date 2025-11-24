import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsterDetails } from './roadster-details';

describe('RoadsterDetails', () => {
  let component: RoadsterDetails;
  let fixture: ComponentFixture<RoadsterDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadsterDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadsterDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
