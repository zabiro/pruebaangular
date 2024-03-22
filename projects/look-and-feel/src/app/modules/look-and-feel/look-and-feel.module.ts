import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookAndFeelRoutingModule } from './look-and-feel-routing.module';
import { SystemDesignComponent } from './system-design/system-design.component';
import { FormsModule } from '@angular/forms';
import { ColorControlComponent } from './color-control/color-control.component';


@NgModule({
  declarations: [
    SystemDesignComponent,
    ColorControlComponent
  ],
  imports: [
    CommonModule,
    LookAndFeelRoutingModule,
    FormsModule
  ]
})
export class LookAndFeelModule { }
