import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabecalho2Component } from './cabecalho2.component';

describe('Cabecalho2Component', () => {
  let component: Cabecalho2Component;
  let fixture: ComponentFixture<Cabecalho2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cabecalho2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cabecalho2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
