import { Component, Input, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, SelectControlValueAccessor, SelectMultipleControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-select-box',
  template: `
            <div class="form-group">
              <label>{{label}}</label>
              <ng-select 
                [items]="options" 
                [bindLabel]="bindLabel" 
                [bindValue]="bindValue" 
                [ngModel]="selectedValue"
                (ngModelChange)="control?.markAsTouched();onChange($event)"
                (blur)="onTouched()"
                [disabled]="disabled"
                [multiple]="true" 
              >
              </ng-select>
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
      useExisting: forwardRef(() => SelectBoxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectBoxComponent),
      multi: true
    }
  ]
})
export class SelectBoxComponent implements ControlValueAccessor,Validator {

  @Input() label!: string;
  @Input() options!: Array<any>;
  @Input() bindLabel!: string;
  @Input() bindValue!: string;
  control: AbstractControl | undefined;

  selectedValue: any;
  onChange: any = () => { };
  onTouched: any = () => { };
  disabled!: boolean;


  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    this.control = control;
    return null;

  }

  ngOnInit() {
    this.selectedValue = null;
  }

  writeValue(value: any): void {
    debugger;
    this.selectedValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }







}
