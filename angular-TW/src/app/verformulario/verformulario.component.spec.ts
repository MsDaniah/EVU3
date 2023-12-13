import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerformularioComponent } from './verformulario.component';

describe('VerformularioComponent', () => {
  let component: VerformularioComponent;
  let fixture: ComponentFixture<VerformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerformularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
