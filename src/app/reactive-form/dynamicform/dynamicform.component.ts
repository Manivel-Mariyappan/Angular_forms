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
                        <app-select-box label="car" [options]="cars" bindValue="value" bindLabel="name" formControlName="car"></app-select-box>
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
  options: any;

  cars = [
    { value: 1, name: 'Volvo' },
    { value: 2, name: 'Saab' },
    { value: 3, name: 'Opel' },
    { value: 4, name: 'Audi' },
  ];


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.options = [
      {
        firstName: '',
        lastName: '',
        infoText: 'dummy text 1',
        car: [1, 2]
      },
      {
        firstName: '',
        lastName: '',
        infoText: 'dummy text 2',
        car: [1, 2]
      },
      {
        firstName: '',
        lastName: '',
        infoText: 'dummy text 2',
        car: [1, 2]
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
      nameList.push(this.createControl(option.firstName, option.car));
    };
  }

  createControl(firstName: string, car: string) {
    return this.formBuilder.group({
      firstName: [firstName, [Validators.required, Validators.maxLength(5)]],
      car: [car, [Validators.required]]
    });
  }

  getOptionsControls() {
    return (this.nameForm.get('nameList') as FormArray).controls;
  }
}
