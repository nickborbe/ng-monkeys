import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonkeyComponent } from './monkey/monkey.component';
import { MonkeyListComponent } from './monkey-list/monkey-list.component';
import { TruthService } from './truth.service';
import { MonkeyDetailsComponent } from './monkey-details/monkey-details.component';
import { MonkeyBoxComponent } from './monkey-box/monkey-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddMonkeyComponent } from './add-monkey/add-monkey.component';
import { EditMonkeyComponent } from './edit-monkey/edit-monkey.component';

@NgModule({
  declarations: [
    AppComponent,
    MonkeyComponent,
    MonkeyListComponent,
    MonkeyDetailsComponent,
    MonkeyBoxComponent,
    NavbarComponent,
    AddMonkeyComponent,
    EditMonkeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule

  ],
  providers: [TruthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
