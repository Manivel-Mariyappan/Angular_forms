import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  template: `
              <ng-container *ngFor="let optionControl of getOptionsControls(); let i = index">
                <div style="border:1px solid red;padding:10px;margin:10px 0;">
                  <div class="bg-success" style="padding:10px;margin-bottom:16px;border-radius:10px;">{{options[i].infoText}}</div>
                  <form [formGroup]="nameForm">
                    <div formArrayName="nameList">
                      <div [formGroupName]="i">
                        <app-textbox label="First Name" formControlName="firstName"></app-textbox>
                      </div>
                    </div>
                  </form>
                </div>
                </ng-container>
                <pre>{{nameForm.value | json}}</pre>
                <br/>
                {{nameForm.status | json}}
              `,
})
export class DynamicformComponent implements OnInit {

  nameForm!: FormGroup;
  options: any

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.options = [
      {
        firstName: '',
        lastName: '',
        infoText: 'dummy text 1'
      },
      {
        firstName: '',
        lastName: '',
        infoText: 'dummy text 2'
      },
      {
        firstName: '',
        lastName: '',
        infoText: 'dummy text 2'
      },
    ];

    this.nameForm = this.formBuilder.group({
      nameList: this.formBuilder.array([]),
    });

    this.generateArryform();
  }

  generateArryform() {
    const nameList = this.nameForm.get('nameList') as FormArray;
    for (const option of this.options) {
      nameList.push(this.createControl(option.firstName));
    };
  }

  createControl(firstName: string) {
    return this.formBuilder.group({
      firstName: [firstName, [Validators.required, Validators.maxLength(5)]]
    });
  }

  getOptionsControls() {
    return (this.nameForm.get('nameList') as FormArray).controls;
  }
}
