import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirHostComponent } from './custom-dir-host.component';

describe('CustomDirHostComponent', () => {
  let component: CustomDirHostComponent;
  let fixture: ComponentFixture<CustomDirHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
