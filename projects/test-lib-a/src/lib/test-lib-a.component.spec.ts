import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibAComponent } from './test-lib-a.component';

describe('TestLibAComponent', () => {
  let component: TestLibAComponent;
  let fixture: ComponentFixture<TestLibAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLibAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLibAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
