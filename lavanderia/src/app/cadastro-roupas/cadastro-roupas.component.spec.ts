import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRoupasComponent } from './cadastro-roupas.component';

describe('CadastroRoupasComponent', () => {
  let component: CadastroRoupasComponent;
  let fixture: ComponentFixture<CadastroRoupasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroRoupasComponent]
    });
    fixture = TestBed.createComponent(CadastroRoupasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
