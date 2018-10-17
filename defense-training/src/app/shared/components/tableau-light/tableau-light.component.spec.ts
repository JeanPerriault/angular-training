import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauLightComponent } from './tableau-light.component';

describe('TableauLightComponent', () => {
  let component: TableauLightComponent;
  let fixture: ComponentFixture<TableauLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
