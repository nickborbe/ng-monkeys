import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyDetailsComponent } from './monkey-details.component';

describe('MonkeyDetailsComponent', () => {
  let component: MonkeyDetailsComponent;
  let fixture: ComponentFixture<MonkeyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
