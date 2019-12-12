import { Component, OnInit, ViewChild } from "@angular/core";
import { gridDummyData, initialSortingExpression } from "../grid-dummy-data";
import { IgxGridComponent } from "igniteui-angular";

@Component({
  selector: "app-normal-igx-grid",
  templateUrl: "./normal-igx-grid.component.html",
  styleUrls: ["./normal-igx-grid.component.scss"]
})
export class NormalIgxGridComponent implements OnInit {
  @ViewChild("myGrid", { static: true }) private grid: IgxGridComponent;
  gridData = gridDummyData;

  ngOnInit(): void {
    this.grid.sortingExpressions = initialSortingExpression;
  }
}
