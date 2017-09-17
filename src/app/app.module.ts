import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
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
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
