import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LookAndFeelRepository } from './core/repositories/lookAndFeel.repository';
import { LookAndFeelService } from './infrastructure/services/look-and-feel.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: LookAndFeelRepository, useClass: LookAndFeelService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
