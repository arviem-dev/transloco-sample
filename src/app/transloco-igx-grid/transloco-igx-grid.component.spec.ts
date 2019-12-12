import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslocoIgxGridComponent } from './transloco-igx-grid.component';

describe('TranslocoIgxGridComponent', () => {
  let component: TranslocoIgxGridComponent;
  let fixture: ComponentFixture<TranslocoIgxGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslocoIgxGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslocoIgxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
