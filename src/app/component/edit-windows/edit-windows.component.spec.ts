import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWindowsComponent } from './edit-windows.component';

describe('EditWindowsComponent', () => {
  let component: EditWindowsComponent;
  let fixture: ComponentFixture<EditWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWindowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
