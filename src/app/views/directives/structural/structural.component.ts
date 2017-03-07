import {Component} from '@angular/core';

@Component({
    selector: 'structural-directive',
    templateUrl: './structural.component.html'
})

export class StructuralDirective {
    locations: Array<any> = ['Gurgaon','Pune','Bangalore'];
}