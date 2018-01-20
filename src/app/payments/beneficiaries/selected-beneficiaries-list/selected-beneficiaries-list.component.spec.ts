import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBeneficiariesListComponent } from './selected-beneficiaries-list.component';

describe('SelectedBeneficiariesListComponent', () => {
  let component: SelectedBeneficiariesListComponent;
  let fixture: ComponentFixture<SelectedBeneficiariesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedBeneficiariesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedBeneficiariesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
