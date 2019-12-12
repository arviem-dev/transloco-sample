import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef
} from "@angular/core";
import { gridDummyData, initialSortingExpression } from "../grid-dummy-data";
import { IgxGridComponent } from "igniteui-angular";
import { Subject } from "rxjs";
import { takeUntil, filter, delay } from "rxjs/operators";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "app-transloco-igx-grid",
  templateUrl: "./transloco-igx-grid.component.html",
  styleUrls: ["./transloco-igx-grid.component.scss"]
})
export class TranslocoIgxGridComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("myGrid", { static: false }) private grid: IgxGridComponent;
  private readonly destroy$ = new Subject<boolean>();
  gridData = gridDummyData;

  constructor(
    private readonly translocoService: TranslocoService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.translocoService.events$
      .pipe(
        takeUntil(this.destroy$),
        filter(e => e.type === "translationLoadSuccess"),
        delay(0)
      )
      .subscribe(() => {
        this.grid.sortingExpressions = initialSortingExpression;
      });
  }

  ngAfterViewInit(): void {
    if (this.grid) {
      this.grid.sortingExpressions = initialSortingExpression;
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
