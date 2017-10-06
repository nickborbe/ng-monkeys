import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyBoxComponent } from './monkey-box.component';

describe('MonkeyBoxComponent', () => {
  let component: MonkeyBoxComponent;
  let fixture: ComponentFixture<MonkeyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
