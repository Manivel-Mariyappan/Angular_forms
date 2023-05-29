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
              <app-selectbox label="language" formControlName="language"></app-selectbox>
            </form>
            <pre>{{infoForm.value | json}}</pre>
              <br />
              {{infoForm.status | json}}
          </div>
  `,
})
export class ReactiveFormComponent {
  infoForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.infoForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      address: ['', [Validators.required, Validators.maxLength(5)]],
      phone: ['', [Validators.required]],
    })
  }

  submitProfileForm(infoForm: FormGroup) {
    if (infoForm.valid)
      debugger;
  }

}
