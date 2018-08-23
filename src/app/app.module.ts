import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule,  MatDividerModule, MatInputModule, MatListModule,  MatTableModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubmitLunchChoiceComponent } from './submit-lunch-choice/submit-lunch-choice.component';
import { ShowLunchOrderComponent } from './show-lunch-order/show-lunch-order.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitLunchChoiceComponent,
    ShowLunchOrderComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     BrowserAnimationsModule,
     MatButtonModule,
     MatCardModule,
     MatDividerModule,
     MatInputModule,
     MatListModule,
     MatTableModule,
     MatTabsModule,
     MatToolbarModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
