import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PieComponent } from './components/pie/pie.component';
import { BarComponent } from './components/bar/bar.component';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    ChartsComponent,
    PieComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgChartsModule,
    HighchartsChartModule
  ],
  providers:[
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class ChartsModule { }
