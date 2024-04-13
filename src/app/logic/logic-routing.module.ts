import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogicComponent } from './logic.component';

const routes: Routes = [{ path: '', component: LogicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicRoutingModule { }
