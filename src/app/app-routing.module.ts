import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionTestComponent } from './accordion-test/accordion-test.component';

const routes: Routes = [
  {
    path: '',
    component: AccordionTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
