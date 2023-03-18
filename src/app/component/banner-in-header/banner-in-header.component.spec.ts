import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInHeaderComponent } from './banner-in-header.component';

describe('BannerInHeaderComponent', () => {
  let component: BannerInHeaderComponent;
  let fixture: ComponentFixture<BannerInHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerInHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
