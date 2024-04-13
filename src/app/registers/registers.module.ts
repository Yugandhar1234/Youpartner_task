import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistersRoutingModule } from './registers-routing.module';
import { RegistersComponent } from './registers.component';
import { MaterialModule } from 'src/material/material.module';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    RegistersComponent
  ],
  imports: [
    CommonModule,
    RegistersRoutingModule,
    MaterialModule,
    ShareModule
  ]
})
export class RegistersModule { }
