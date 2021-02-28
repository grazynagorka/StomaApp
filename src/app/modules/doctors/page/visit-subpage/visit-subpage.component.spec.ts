import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitSubpageComponent } from './visit-subpage.component';

describe('VisitSubpageComponent', () => {
  let component: VisitSubpageComponent;
  let fixture: ComponentFixture<VisitSubpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitSubpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
