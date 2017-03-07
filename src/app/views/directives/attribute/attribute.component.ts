import {Component} from '@angular/core';

@Component({
    selector: 'attribute-directive',
    templateUrl: './attribute.component.html'
})

export class AttributeDirective {
    managers: Array<any> = ['Prithveesh', 'Meeraj', 'Raman'];
    Prithveesh: Array<any> = ['Rashpal','Vidit','Nikhil'];
    Meeraj: Array<any> = ['Shivam','Uttam','Gaurav'];
    Raman: Array<any> = ['Sachin','Salman','Deepak'];
}