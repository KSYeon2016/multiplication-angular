import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTblComponent } from './multi-tbl.component';

describe('MultiTblComponent', () => {
  let component: MultiTblComponent;
  let fixture: ComponentFixture<MultiTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
