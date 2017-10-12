import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonkeyComponent } from './add-monkey.component';

describe('AddMonkeyComponent', () => {
  let component: AddMonkeyComponent;
  let fixture: ComponentFixture<AddMonkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
