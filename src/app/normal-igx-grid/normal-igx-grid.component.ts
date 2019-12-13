import { Component, OnInit, ViewChild } from '@angular/core';
import { gridDummyData, initialSortingExpression } from '../grid-dummy-data';
import { IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-normal-igx-grid',
  templateUrl: './normal-igx-grid.component.html'
})
export class NormalIgxGridComponent implements OnInit {
  @ViewChild('myGrid', { static: true }) private readonly grid: IgxGridComponent;
  readonly gridData = gridDummyData;

  ngOnInit(): void {
    this.grid.sortingExpressions = initialSortingExpression;
  }
}
