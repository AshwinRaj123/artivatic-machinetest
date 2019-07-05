import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDashboardComponent } from './more-dashboard.component';

describe('MoreDashboardComponent', () => {
  let component: MoreDashboardComponent;
  let fixture: ComponentFixture<MoreDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
