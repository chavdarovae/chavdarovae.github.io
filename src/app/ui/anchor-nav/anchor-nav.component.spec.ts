import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorNavComponent } from './anchor-nav.component';

describe('AnchorNavComponent', () => {
  let component: AnchorNavComponent;
  let fixture: ComponentFixture<AnchorNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
