import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButDetalComponent } from './but-detal.component';

describe('ButDetalComponent', () => {
  let component: ButDetalComponent;
  let fixture: ComponentFixture<ButDetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButDetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
