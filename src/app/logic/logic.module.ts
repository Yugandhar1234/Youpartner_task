import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogicRoutingModule } from './logic-routing.module';
import { LogicComponent } from './logic.component';
import { MaterialModule } from 'src/material/material.module';


@NgModule({
  declarations: [
    LogicComponent
  ],
  imports: [
    CommonModule,
    LogicRoutingModule,
    MaterialModule
  ]
})
export class LogicModule { }
