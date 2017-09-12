import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyComponent } from './monkey.component';

describe('MonkeyComponent', () => {
  let component: MonkeyComponent;
  let fixture: ComponentFixture<MonkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
