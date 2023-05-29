import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  template: `
      <form>
        <app-textbox label="First Name" name="fisrtName" [(ngModel)]="modal.firstName" required maxlength="5"></app-textbox>
        <app-textbox label="phone" name="phone" [(ngModel)]="modal.phone" required maxlength="5"></app-textbox>
        <app-textbox label="email" name="email" [(ngModel)]="modal.contact.email" required maxlength="5"></app-textbox>
        <app-textbox label="address" name="address" [(ngModel)]="modal.contact.address" required maxlength="5"></app-textbox>
      </form>
      <pre>{{modal | json}}</pre>
  `,
})
export class TemplatedrivenComponent {
  modal: any;

  constructor() {
    this.modal = {
      firstName: "",
      phone:"",
      contact:{
        email:"",
        address:"",
      }
    }
  }
}
