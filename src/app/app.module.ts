import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { GiftsModule } from './gifts/gifts.module';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [  
    BrowserModule,
    ShareModule,
    GiftsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
