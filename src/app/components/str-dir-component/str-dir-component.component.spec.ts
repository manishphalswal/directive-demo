import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrDirComponentComponent } from './str-dir-component.component';

describe('StrDirComponentComponent', () => {
  let component: StrDirComponentComponent;
  let fixture: ComponentFixture<StrDirComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrDirComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrDirComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
