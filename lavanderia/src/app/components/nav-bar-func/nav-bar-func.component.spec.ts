import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarFuncComponent } from './nav-bar-func.component';

describe('NavBarFuncComponent', () => {
  let component: NavBarFuncComponent;
  let fixture: ComponentFixture<NavBarFuncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarFuncComponent]
    });
    fixture = TestBed.createComponent(NavBarFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
