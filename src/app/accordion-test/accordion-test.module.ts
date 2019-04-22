import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionTestComponent } from './accordion-test.component';
import { AccordionModule } from 'bayan';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AccordionTestComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    NgxChartsModule
  ],
  exports: [
    AccordionTestComponent
  ]
})
export class AccordionTestModule { }
