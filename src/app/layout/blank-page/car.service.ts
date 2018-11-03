import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Car} from './car';
import {AttandanceModel} from './attandance.model';

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

  attandanceType =[
    {"seq":1,"code":"A","name":"연차"},
    {"seq":2,"code":"B","name":"오전반차"},
    {"seq":3,"code":"C","name":"오후반차"},
   // {"seq":4,"code":"D","name":"외근"},
    {"seq":5,"code":"E","name":"대체휴가(종일)"},
    {"seq":6,"code":"F","name":"대체휴가(오전반차)"},
    {"seq":7,"code":"G","name":"대체휴가(오후반차)"}
  ]

  attendance ={
    "data":[
      new AttandanceModel("10/1","8:50","18:10","N","")
      ,new AttandanceModel("10/2","8:51","18:10","N","")
      ,new AttandanceModel("10/3","8:52","18:10","N","")
      ,new AttandanceModel("10/4","8:53","18:10","N","")
      ,new AttandanceModel("10/5","8:54","18:10","N","")
      ,new AttandanceModel("10/6","8:55","18:10","N","")
      ,new AttandanceModel("10/7","8:56","18:10","N","")
      ,new AttandanceModel("10/8","8:57","18:10","N","")
      ,new AttandanceModel("10/9","8:58","18:10","N","")
      ,new AttandanceModel("10/10","8:59","18:10","N","")
      ,new AttandanceModel("10/11","9:00","18:10","N","")
      ,new AttandanceModel("10/12","9:01","18:10","Y","")
      ,new AttandanceModel("10/13","9:02","18:10","Y","")
      ,new AttandanceModel("10/14","9:03","18:10","Y","")
      ,new AttandanceModel("10/15","","","N","A")
      ,new AttandanceModel("10/16","9:03","18:10","Y","")
    ]
  }

  constructor(private http: HttpClient) {}
  getCarsSmall() {
    const car:Car[] = this.cars.data;
    return car;

    // return this.http.get('http://localhost:3000/car')
    //             .toPromise()
    //             .then(res => console.log(res))
    //             .then(data => {return car});
                // .then(res => {<Car[]> res.data})
                // .then(data => { return data; });
  }

  getAttendace(){
    return this.attendance.data
  }
  getAttendanceType(){
    return this.attandanceType;
  }
}