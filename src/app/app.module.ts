import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SmileyComponent } from './smiley/smiley.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TestComponent } from './test/test.component';
import { AppreciationComponent } from './appreciation/appreciation.component';

import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';




//import { MatKeyboardModule } from '@ngx-material-keyboard/core';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SmileyComponent,
    FeedbackComponent,
    TestComponent,
    AppreciationComponent
  ],
  imports: [
    
   BrowserModule,
   MatKeyboardModule,
    AppRoutingModule,
    
   // BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
   
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
