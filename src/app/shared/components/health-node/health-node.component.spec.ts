import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthNodeComponent } from './health-node.component';

describe('HealthNodeComponent', () => {
  let component: HealthNodeComponent;
  let fixture: ComponentFixture<HealthNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
