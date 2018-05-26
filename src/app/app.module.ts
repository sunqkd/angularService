import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './shared/stock.service';
import { Stock2Component } from './stock2/stock2.component';
import { LoggerService } from './shared/logger.service';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [StockService,LoggerService], // 注入器  所有组件可见 （一般情况下）
  bootstrap: [AppComponent]
})
export class AppModule { }
