import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import {
  gridDummyData,
  initialSortingExpression,
  initialFilteringExpression
} from "../grid-dummy-data";
import { IgxGridComponent, ISortingExpression } from "igniteui-angular";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-normal-igx-grid",
  templateUrl: "./normal-igx-grid.component.html",
  styleUrls: ["./normal-igx-grid.component.scss"]
})
export class NormalIgxGridComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("myGrid", { static: true }) public grid: IgxGridComponent;
  private readonly destroy$ = new Subject<boolean>();
  gridData = gridDummyData;

  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initializeSorting();
  }

  private initializeSorting(): void {
    this.grid.sortingExpressions = initialSortingExpression; // sorting by first name

    this.grid.onSortingDone
      .pipe(takeUntil(this.destroy$))
      .subscribe((sortingExpression: ISortingExpression) => {
        console.log(sortingExpression);
      });
  }

  ngAfterViewInit(): void {
    this.initializeFiltering();
    this.cdr.detectChanges();
  }

  private initializeFiltering(): void {
    this.grid.filteringExpressionsTree = initialFilteringExpression;

    this.grid.onFilteringDone.pipe(takeUntil(this.destroy$)).subscribe(() => {
      console.log(this.grid.filteringExpressionsTree);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
