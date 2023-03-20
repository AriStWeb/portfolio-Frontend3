import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerInHeaderComponent } from './component/banner-in-header/banner-in-header.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import {HttpClientModule} from '@angular/common/http';
import { EditWindowsComponent } from './component/edit-windows/edit-windows.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerInHeaderComponent,
    EditWindowsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlifeFileToBase64Module,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
