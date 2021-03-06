import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDirComponentComponent } from './attr-dir-component.component';

describe('AttrDirComponentComponent', () => {
  let component: AttrDirComponentComponent;
  let fixture: ComponentFixture<AttrDirComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrDirComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrDirComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
