import { NgModule ,LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { Pop1Component } from './pop1/pop1.component';
//import { Pop1Component } from './blank-page.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MomentDateAdapter} from '@angular/material-moment-adapter';

import {MessageService} from 'primeng/api';

export const MY_FORMATS = {
    parse: {
      dateInput: 'LL',
    },
    display: {
      dateInput: 'LL',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };

@NgModule({
    imports: [
        CommonModule
        , BlankPageRoutingModule
        ,AccordionModule
        ,TableModule
        ,ButtonModule
        ,MatCheckboxModule
        ,DialogModule
        ,InputTextModule
        ,MatFormFieldModule
        ,MatInputModule
        ,MatSelectModule
        ,MatDialogModule
        ,FormsModule
        ,MatButtonModule
        ,MatToolbarModule
        ,MatIconModule
        ,MatDatepickerModule
        ,MatNativeDateModule
        ,MatMomentDateModule
        ,ToastModule
    ],
    declarations: [BlankPageComponent,Pop1Component],
    providers: [
        {provide: LOCALE_ID, useValue: 'ko-KR'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [LOCALE_ID]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
        MessageService
      ],
      entryComponents: [
        Pop1Component
    ]
})
export class BlankPageModule {}
