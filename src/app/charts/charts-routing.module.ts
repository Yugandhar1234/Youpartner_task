import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { PieComponent } from './components/pie/pie.component';
import { BarComponent } from './components/bar/bar.component';

const routes: Routes = [
  {
    path: '', component: ChartsComponent, children: [
      { path: 'pie', component: PieComponent },
      { path: 'bar', component: BarComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
