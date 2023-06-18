import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurBatailleComponent } from './simulateur-bataille.component';

describe('SimulateurBatailleComponent', () => {
  let component: SimulateurBatailleComponent;
  let fixture: ComponentFixture<SimulateurBatailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateurBatailleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulateurBatailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
