import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { SharedMaterialModule } from '@reusable-nav/shared/material'
import { SharedNavModule } from '@reusable-nav/shared/nav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
