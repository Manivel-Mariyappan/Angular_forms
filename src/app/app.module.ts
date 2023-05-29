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

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TextboxComponent,
    DynamicformComponent,
    SubgroupComponent,
    TemplatedrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
