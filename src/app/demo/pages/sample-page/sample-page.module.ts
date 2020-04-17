import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {AgmCoreModule} from "@agm/core";
import {DxDataGridModule, DxPieChartModule} from "devextreme-angular";

@NgModule({
  declarations: [SamplePageComponent],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    AgmCoreModule,
    DxDataGridModule,
    DxPieChartModule
  ]
})
export class SamplePageModule { }
