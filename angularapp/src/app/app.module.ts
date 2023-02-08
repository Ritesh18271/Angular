import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { Test2Component } from './test2/test2.component';
import { CardComponent } from './card/card.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { CtopComponent } from './ctop/ctop.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Test2Component,
    CardComponent,
    PasswordGeneratorComponent,
    CtopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
