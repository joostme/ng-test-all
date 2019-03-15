import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibBComponent } from './test-lib-b.component';

describe('TestLibBComponent', () => {
  let component: TestLibBComponent;
  let fixture: ComponentFixture<TestLibBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLibBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLibBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
