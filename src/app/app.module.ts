import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MorsePipe } from './morse.pipe';
import { Md5hasherPipe } from './md5hasher.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MorsePipe,
    Md5hasherPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
