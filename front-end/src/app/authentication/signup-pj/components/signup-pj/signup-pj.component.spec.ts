import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPjComponent } from './signup-pj.component';

describe('SignupPjComponent', () => {
  let component: SignupPjComponent;
  let fixture: ComponentFixture<SignupPjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
