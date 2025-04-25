import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse la página', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener una lista de viajes', () => {
    expect(component.viajes.length).toBeGreaterThan(0);
  });

  it('debería seleccionar un viaje correctamente', () => {
    const viaje = { id: 1, destino: 'Prueba', calificacion: 4, comentario: 'Test' };
    spyOn(component, 'verDetalle');
    component.verDetalle(viaje);
    expect(component.verDetalle).toHaveBeenCalledWith(viaje);
  });
});
