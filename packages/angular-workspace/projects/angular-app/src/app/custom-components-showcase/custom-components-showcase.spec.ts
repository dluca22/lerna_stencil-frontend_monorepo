import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentsShowcase } from './custom-components-showcase';

describe('CustomComponentsShowcase', () => {
  let component: CustomComponentsShowcase;
  let fixture: ComponentFixture<CustomComponentsShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomComponentsShowcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComponentsShowcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
