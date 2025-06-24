import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleDestinoPage } from './detalle-destino.page';

describe('DetalleDestinoPage', () => {
  let component: DetalleDestinoPage;
  let fixture: ComponentFixture<DetalleDestinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDestinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
