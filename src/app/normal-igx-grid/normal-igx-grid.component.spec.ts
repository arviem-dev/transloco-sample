import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalIgxGridComponent } from './normal-igx-grid.component';

describe('NormalIgxGridComponent', () => {
  let component: NormalIgxGridComponent;
  let fixture: ComponentFixture<NormalIgxGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalIgxGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalIgxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
