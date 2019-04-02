import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    MaterialModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: []
})
export class AppModule { }
