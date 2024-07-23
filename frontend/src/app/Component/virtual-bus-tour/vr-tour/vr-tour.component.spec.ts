import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrTourComponent } from './vr-tour.component';

describe('VrTourComponent', () => {
  let component: VrTourComponent;
  let fixture: ComponentFixture<VrTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VrTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
