import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajButaComponent } from './dodaj-buta.component';

describe('DodajButaComponent', () => {
  let component: DodajButaComponent;
  let fixture: ComponentFixture<DodajButaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajButaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajButaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
