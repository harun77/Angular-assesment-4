import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  data = [
    {'id' : '1', 'name': 'zaa', 'email': 'ha@exxample.com', 'phone': '0-123456789'},
    {'id' : '2', 'name': 'ybb', 'email': 'gb@exxxample.com', 'phone': '1-123456789'},
    {'id' : '3', 'name': 'xcc', 'email': 'fc@exxxxxample.com', 'phone': '2-123456789'},
    {'id' : '4', 'name': 'wdd', 'email': 'ed@example.com', 'phone': '3-123456789'},
    {'id' : '5', 'name': 'vee', 'email': 'de@example.com', 'phone': '4-123456789'},
    {'id' : '6', 'name': 'uff', 'email': 'cf@example.com', 'phone': '5-123456789'},
    {'id' : '7', 'name': 'tgg', 'email': 'bg@example.com', 'phone': '6-123456789'},
    {'id' : '8', 'name': 'shh', 'email': 'ah@example.com', 'phone': '7-123456789'},
    {'id' : '9', 'name': 'rhh', 'email': 'jh@example.com', 'phone': '8-123456789'},
    {'id' : '10', 'name': 'zaa', 'email': 'ha@exxample.com', 'phone': '0-123456789'},
    {'id' : '11', 'name': 'ybb', 'email': 'gb@exxxample.com', 'phone': '1-123456789'},
    {'id' : '12', 'name': 'xcc', 'email': 'fc@exxxxxample.com', 'phone': '2-123456789'},
    {'id' : '13', 'name': 'wdd', 'email': 'ed@example.com', 'phone': '3-123456789'},
    {'id' : '14', 'name': 'vee', 'email': 'de@example.com', 'phone': '4-123456789'},
    {'id' : '15', 'name': 'uff', 'email': 'cf@example.com', 'phone': '5-123456789'},
    {'id' : '16', 'name': 'tgg', 'email': 'bg@example.com', 'phone': '6-123456789'},
    {'id' : '17', 'name': 'shh', 'email': 'ah@example.com', 'phone': '7-123456789'},
    {'id' : '18', 'name': 'rhh', 'email': 'jh@example.com', 'phone': '8-123456789'},
    {'id' : '19', 'name': 'zaa', 'email': 'ha@exxample.com', 'phone': '0-123456789'},
    {'id' : '20', 'name': 'ybb', 'email': 'gb@exxxample.com', 'phone': '1-123456789'},
    {'id' : '21', 'name': 'xcc', 'email': 'fc@exxxxxample.com', 'phone': '2-123456789'},
    {'id' : '22', 'name': 'wdd', 'email': 'ed@example.com', 'phone': '3-123456789'},
    {'id' : '23', 'name': 'vee', 'email': 'de@example.com', 'phone': '4-123456789'},
    {'id' : '24', 'name': 'uff', 'email': 'cf@example.com', 'phone': '5-123456789'},
    {'id' : '25', 'name': 'tgg', 'email': 'bg@example.com', 'phone': '6-123456789'},
    {'id' : '26', 'name': 'shh', 'email': 'ah@example.com', 'phone': '7-123456789'},
    {'id' : '27', 'name': 'rhh', 'email': 'jh@example.com', 'phone': '8-123456789'},
  ];

  constructor() { }

  getData(){
    return of(this.data);
  }
}
