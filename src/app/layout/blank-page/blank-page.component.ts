import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';

import {Car} from './car';
import {Attandance} from './attandance';
import {CarService} from "./car.service";
import * as alasql from 'alasql';

import { Pop1Component } from './pop1/pop1.component';

import {MessageService} from 'primeng/api';

export interface Food {
    value: string;
    viewValue: string;
  }

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: [
        './blank-page.component.scss'
    ]
})
export class BlankPageComponent implements OnInit {

    cars: Car[];
    selectedCars: Car[];
    cols: any[];

    displayDialog:boolean=false;


    foods: Food[] ;

    animal: string;
    name: string;

    attandace:any[];
    attandanceTypes:any[];
    attandace_convert:any[];
    
    constructor(private carService: CarService,public dialog: MatDialog,private messageService: MessageService) { 
        
      this.attandace = this.carService.getAttendace();
      this.attandanceTypes = this.carService.getAttendanceType();
      this.attandace_convert = alasql('SELECT a.stand_date, a.start_time, a.end_time ,a.is_late, b.name as annual \
                                         FROM ? a \
                                         LEFT OUTER JOIN ? b \
                                           ON a.annual = b.code',[this.attandace,this.attandanceTypes]);
    }

    ngOnInit() {
        this.cars = this.carService.getCarsSmall();
    
        this.cols = [
            { field: 'stand_date', header: '일자' },
            { field: 'start_time', header: '출근시간' },
            { field: 'end_time', header: '퇴근시간' },
            { field: 'is_late', header: '지각여부' },
            { field: 'annual', header: '???' }
        ];
        
    }

    showDialogToAdd() {
        this.displayDialog = true;
    }
    delete(){

    }
    save(){

    }

    openDialog(): void {
        const dialogRef = this.dialog.open(Pop1Component, {
          width: '400px',
          data: {name: this.name, animal: this.animal}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
          this.addSingle();
        });
      }

    addSingle() {
      console.log('addSingle');
      this.messageService.add({severity:'success', summary:'휴가 신청 완료', detail:'휴가 신청이 완료 되었습니다.'});
    }
}