import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeregresoComponent } from './veregreso.component';

describe('VeregresoComponent', () => {
  let component: VeregresoComponent;
  let fixture: ComponentFixture<VeregresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeregresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeregresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
