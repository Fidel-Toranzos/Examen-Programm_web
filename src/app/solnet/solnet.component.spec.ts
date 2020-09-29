import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolnetComponent } from './solnet.component';

describe('SolnetComponent', () => {
  let component: SolnetComponent;
  let fixture: ComponentFixture<SolnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
