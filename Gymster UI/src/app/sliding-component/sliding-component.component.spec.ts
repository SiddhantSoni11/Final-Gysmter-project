import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingComponentComponent } from './sliding-component.component';

describe('SlidingComponentComponent', () => {
  let component: SlidingComponentComponent;
  let fixture: ComponentFixture<SlidingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
