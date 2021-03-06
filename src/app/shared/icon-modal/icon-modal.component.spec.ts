import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconModalComponent } from './icon-modal.component';

describe('IconModalComponent', () => {
  let component: IconModalComponent;
  let fixture: ComponentFixture<IconModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
