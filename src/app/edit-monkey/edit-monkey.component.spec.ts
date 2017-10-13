import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonkeyComponent } from './edit-monkey.component';

describe('EditMonkeyComponent', () => {
  let component: EditMonkeyComponent;
  let fixture: ComponentFixture<EditMonkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMonkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
