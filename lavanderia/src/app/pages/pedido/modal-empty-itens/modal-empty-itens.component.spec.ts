import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmptyItensComponent } from './modal-empty-itens.component';

describe('ModalEmptyItensComponent', () => {
  let component: ModalEmptyItensComponent;
  let fixture: ComponentFixture<ModalEmptyItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEmptyItensComponent]
    });
    fixture = TestBed.createComponent(ModalEmptyItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
