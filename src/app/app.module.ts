import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TextboxComponent } from './textbox/textbox.component';
import { DynamicformComponent } from './reactive-form/dynamicform/dynamicform.component';
import { SubgroupComponent } from './reactive-form/subgroup/subgroup.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectBoxComponent } from './select-box/select-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TextboxComponent,
    DynamicformComponent,
    SubgroupComponent,
    TemplatedrivenComponent,
    SelectBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
