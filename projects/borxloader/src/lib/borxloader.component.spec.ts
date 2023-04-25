import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorxloaderComponent } from './borxloader.component';

describe('BorxloaderComponent', () => {
  let component: BorxloaderComponent;
  let fixture: ComponentFixture<BorxloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorxloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorxloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
