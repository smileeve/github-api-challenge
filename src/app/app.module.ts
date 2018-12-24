import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './modules/home/components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
