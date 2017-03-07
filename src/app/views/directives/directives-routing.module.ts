import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {StructuralDirective} from './structural/structural.component';
import {AttributeDirective} from './attribute/attribute.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'StructuralDirective',
    pathMatch: 'full'
  }, {
    path: 'structural-directives',
    component: StructuralDirective
  }, {
    path: 'attribute-directives',
    component: AttributeDirective
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule],
  exports: [RouterModule],
  providers: []
})
export class DirectivesRoutingModule { }
