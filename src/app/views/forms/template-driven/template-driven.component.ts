import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent  {
  message: String;
    locations = ['Gurgaon','Bangalore','Pune'];
    submitData(formData){
        console.log(formData);
        this.message = 'Form Values can be seen in Console !!';
    }
}
