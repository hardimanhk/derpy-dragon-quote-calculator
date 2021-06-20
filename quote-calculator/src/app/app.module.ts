import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFormComponent } from './app-form/app-form.component';
import { AppQuoteDisplayComponent } from './app-quote-display/app-quote-display.component';
import { FormsModule } from '@angular/forms';
import { QuoteCalculator } from './quote-calculator.service';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFormComponent,
    AppQuoteDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [QuoteCalculator],
  bootstrap: [AppComponent]
})
export class AppModule { }
