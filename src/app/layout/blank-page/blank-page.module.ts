import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {TableModule} from 'primeng/table';


@NgModule({
    imports: [CommonModule, BlankPageRoutingModule,AccordionModule,TableModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
