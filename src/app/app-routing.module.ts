import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalIgxGridComponent } from './normal-igx-grid/normal-igx-grid.component';
import { TranslocoIgxGridComponent } from './transloco-igx-grid/transloco-igx-grid.component';

const routes: Routes = [
  {
    path: '',
    component: NormalIgxGridComponent
  },
  {
    path: 'normal-grid',
    component: NormalIgxGridComponent
  },
  {
    path: 'transloco-grid',
    component: TranslocoIgxGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
