import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subgroup',
  template: `
            <div class="col-lg-12">
              <form action="" class="newform" [formGroup]="infoForm" (ngSubmit)="submitProfileForm(infoForm)">
                <app-textbox label="First Name" formControlName="firstName"></app-textbox>
                <app-textbox label="Email" formControlName="email"></app-textbox>
                <div formGroupName="contact">
                  <app-textbox label="Phone" formControlName="phone"></app-textbox>
                  <app-textbox label="Address" formControlName="address"></app-textbox>
                </div>
              </form>
              <pre>{{infoForm.value | json}}</pre>
              <br/>
              {{infoForm.status | json}}
            </div>
          `,
})
export class SubgroupComponent {
  infoForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.infoForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      contact: this.fb.group({
        address: ['', [Validators.required, Validators.maxLength(5)]],
        phone: ['', [Validators.required, Validators.maxLength(5)]],
      })
    })
  }

  submitProfileForm(infoForm: FormGroup) {
    if (infoForm.valid)
      debugger;
  }
}
