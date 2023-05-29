import { Component, Input, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  template: `
              <div class="form-group mb-2">

                <label for="ID{{label}}">{{label}}</label>
                <input 
                  type="text" [value]="value" 
                  (input)="updateTheValue($event)" (blur)="onTouched()" 
                  [disabled]="disabled"
                  [placeholder]="label" 
                  [name]="label" id="ID{{label}}"
                  class="form-control" 
                > 

                <div style="color:red" *ngIf="control?.touched && (control?.invalid || control?.dirty)">
                  <span *ngIf="control?.errors?.['required']">{{label}} is Required Field</span>
                  <span *ngIf="control?.errors?.['maxlength']">MaxLength</span>
                  <span *ngIf="control?.errors?.['email']">Valid EMail</span>
                </div>
              </div>
           `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextboxComponent),
      multi: true
    }
  ]
})
export class TextboxComponent implements ControlValueAccessor, Validator {

  @Input() label: string;

  value: any;
  onChange: any = () => { };
  onTouched: any = () => { };
  control: AbstractControl | undefined;
  disabled: boolean;


  constructor() {
    this.disabled = false;
    this.label = ''
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    this.control = control;
    return null;

  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateTheValue(event: any) {
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
    console.log(this.control);
    this.control?.markAsTouched();
  }

}
