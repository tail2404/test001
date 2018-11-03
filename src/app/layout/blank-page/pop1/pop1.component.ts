import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CarService} from "../car.service";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-pop1',
  templateUrl: './pop1.component.html',
  styleUrls: ['./pop1.component.scss']
})
export class Pop1Component implements OnInit {
  
  attandanceTypes:any[];

  myDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<Pop1Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private carService: CarService) {
    }
    
    onNoClick(): void {
      this.dialogRef.close();
    }
    
    ngOnInit() {
      this.attandanceTypes = this.getAttandanceTypes()
      console.log('1212');
    }
    
    getAttandanceTypes(){
      let attandanceTypes = this.carService.getAttendanceType();
      return attandanceTypes;
    }

}
