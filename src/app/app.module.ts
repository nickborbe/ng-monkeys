import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonkeyComponent } from './monkey/monkey.component';
import { MonkeyListComponent } from './monkey-list/monkey-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MonkeyComponent,
    MonkeyListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
