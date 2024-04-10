import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncVisualizacaoPedidosComponent } from './func-visualizacao-pedidos.component';

describe('FuncVisualizacaoPedidosComponent', () => {
  let component: FuncVisualizacaoPedidosComponent;
  let fixture: ComponentFixture<FuncVisualizacaoPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncVisualizacaoPedidosComponent]
    });
    fixture = TestBed.createComponent(FuncVisualizacaoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
