import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html'
})
export class StarterTemplateFormComponent implements OnInit {
    customer: any;
    formSubmitted = false;

    constructor() { }

    ngOnInit() {
        this.customer = {};
    }

    onSubmit() {
      this.formSubmitted = true;
    }

}