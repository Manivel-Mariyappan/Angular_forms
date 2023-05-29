import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-box',
  template: `
            <div class="form-group">
              <label>{{label}}</label>
              <ng-select [items]="options" 
                bindLabel="name" 
                bindValue="id" 
              >
              </ng-select>
            </div>
`,
})
export class SelectBoxComponent {
  @Input() label!: string;
  @Input() options!: Array<any>;
  @Input() bindLabel!: string;
  @Input() bindValue!: string;
}
