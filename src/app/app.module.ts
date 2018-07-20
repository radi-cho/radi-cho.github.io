import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';

@NgModule({
  declarations: [AppComponent, GreetingComponent, BasicInfoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
