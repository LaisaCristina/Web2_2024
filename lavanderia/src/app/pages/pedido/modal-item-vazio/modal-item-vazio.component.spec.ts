import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalItemVazioComponent } from './modal-item-vazio.component';

describe('ModalItemVazioComponent', () => {
  let component: ModalItemVazioComponent;
  let fixture: ComponentFixture<ModalItemVazioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalItemVazioComponent]
    });
    fixture = TestBed.createComponent(ModalItemVazioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
