import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthNodeListComponent } from './health-node-list.component';

describe('HealthNodeListComponent', () => {
  let component: HealthNodeListComponent;
  let fixture: ComponentFixture<HealthNodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthNodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthNodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
