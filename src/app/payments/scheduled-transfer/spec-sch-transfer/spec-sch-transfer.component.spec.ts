import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecSchTransferComponent } from './spec-sch-transfer.component';

describe('SpecSchTransferComponent', () => {
  let component: SpecSchTransferComponent;
  let fixture: ComponentFixture<SpecSchTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecSchTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecSchTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
