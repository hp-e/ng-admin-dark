import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthNodePanelComponent } from './health-node-panel.component';

describe('HealthNodePanelComponent', () => {
  let component: HealthNodePanelComponent;
  let fixture: ComponentFixture<HealthNodePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthNodePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthNodePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
