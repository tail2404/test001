import { Component, OnInit } from '@angular/core';
import {Car} from './car';
import {CarService} from "./car.service";

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

    cars: Car[];
    selectedCars: Car[];
    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        // this.cars = this.carService.getCarsSmall();
        this.carService.getCarsSmall()
        .then(result => this.cars = result)

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

}
