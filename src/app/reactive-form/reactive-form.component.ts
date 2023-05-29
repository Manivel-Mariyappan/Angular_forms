import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  template: `
          <div class="col-lg-12">
            <form action="" class="newform" [formGroup]="infoForm" (ngSubmit)="submitProfileForm(infoForm)">
              <app-textbox label="firstName" formControlName="firstName"></app-textbox>
              <app-textbox label="Email" formControlName="email"></app-textbox>
              <app-textbox label="Address" formControlName="address"></app-textbox>
              <app-textbox label="Phone" formControlName="phone"></app-textbox>
              <app-select-box label="car" [options]="cars" bindValue="value" bindLabel="name" formControlName="car"></app-select-box>
            </form>
            <pre>{{infoForm.value | json}}</pre>
              <br />
              {{infoForm.status | json}}
          </div>
  `,
})
export class ReactiveFormComponent {
  infoForm!: FormGroup;

  cars = [
    { value: 1, name: 'Volvo' },
    { value: 2, name: 'Saab' },
    { value: 3, name: 'Opel' },
    { value: 4, name: 'Audi' },
  ];


  constructor(private fb: FormBuilder) {
    this.infoForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      address: ['', [Validators.required, Validators.maxLength(5)]],
      phone: ['', [Validators.required]],
      car: [null],
    })
  }

  submitProfileForm(infoForm: FormGroup) {
    if (infoForm.valid)
      debugger;
  }

}
