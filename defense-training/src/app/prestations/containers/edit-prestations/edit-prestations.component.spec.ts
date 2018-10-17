import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrestationsComponent } from './edit-prestations.component';

describe('EditPrestationsComponent', () => {
  let component: EditPrestationsComponent;
  let fixture: ComponentFixture<EditPrestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPrestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
