import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgClass} from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { DirectivesRoutingModule } from './directives-routing.module';
import { HomeComponent } from './home/home.component';

import {StructuralDirective} from './structural/structural.component';
import {AttributeDirective} from './attribute/attribute.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent,
  StructuralDirective,
  AttributeDirective
  ]
})
export class DirectivesModule { }
