import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvcomponentComponent } from './vvcomponent.component';

describe('VvcomponentComponent', () => {
  let component: VvcomponentComponent;
  let fixture: ComponentFixture<VvcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
