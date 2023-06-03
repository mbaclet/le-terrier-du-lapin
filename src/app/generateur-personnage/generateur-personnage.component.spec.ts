import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateurPersonnageComponent } from './generateur-personnage.component';

describe('GenerateurPersonnageComponent', () => {
  let component: GenerateurPersonnageComponent;
  let fixture: ComponentFixture<GenerateurPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateurPersonnageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateurPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
