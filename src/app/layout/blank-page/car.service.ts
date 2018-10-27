import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Car} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars={
    "data": [
        {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    ]
  } 

  constructor(private http: HttpClient) {}
  getCarsSmall() {
    const car:Car[] = this.cars.data;
    //return car;

    // const httpOptions = {
    //   // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //   headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
    // };

    // httpOptions.headers.append("Access-Control-Allow-Origin", "*")
    // httpOptions.headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    // httpOptions.headers.set("Access-Control-Allow-Origin", "*")
    // httpOptions.headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    return this.http.get('http://localhost:3000/car')
                .toPromise()
                .then(res => console.log(res))
                .then(data => {return car});
                // .then(res => {<Car[]> res.data})
                // .then(data => { return data; });
  }
}