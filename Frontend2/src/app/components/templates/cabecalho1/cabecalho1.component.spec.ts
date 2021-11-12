import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabecalho1Component } from './cabecalho1.component';

describe('Cabecalho1Component', () => {
  let component: Cabecalho1Component;
  let fixture: ComponentFixture<Cabecalho1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cabecalho1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cabecalho1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
