import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs/index';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TemperatureSensorService {

  //public sendMinutesData = new BehaviorSubject({ mins: 0 , temp : 0});
  public sendMinutesData: Subject<any> = new Subject<any>();

  constructor(private _http: HttpClient) { }

getMonthlyData(){
 const  weatherDates = [ 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
 const temp_max = [ 10, 12,18, 24, 5,16,19,22,23,1,14,11,25,7,13,18,14,8,19,20,21,22,22,18,4,2,8,1,6,4]
  let dates = [];
  weatherDates.forEach(value => {
    dates.push('Jan '+value)
  });
  return { dates: dates , temp: temp_max };
}
  getMinutesData(){
   const temp_max = [ 10, 12,-8, 0, 1,2,19,22,23,1,3,11,25,7,13,18,14,8,9,20,21,2,22,0,4,2,8,1,6,4]
    return temp_max[Math.floor(Math.random()*temp_max.length)];

  }

}
