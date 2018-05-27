import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './shared/stock.service';
import { Stock2Component } from './stock2/stock2.component';
import { LoggerService } from './shared/logger.service';
import { AnotherstockserviceService } from './shared/anotherstockservice.service';


@NgModule({
	declarations: [
		AppComponent,
		StockComponent,
		Stock2Component
	],
	imports: [
		BrowserModule
	],
	providers: [
        // useClass、useValue 、 useFactory(提供器的三种提供方式)


		// 工厂方法创建出来的对象 是一个单例对象
		{provide: StockService , useFactory: (logger:LoggerService, isDev) => {
			console.log(isDev);

			let dev = Math.random() > 0.5;
			if(isDev){
				return new StockService(logger)
			}else{
				return new AnotherstockserviceService(logger)
			}
		}, deps: [LoggerService, "IS_DEV_ENV"]},

		LoggerService,

		{provide: "IS_DEV_ENV", useValue: false}

	], // 注入器  所有组件可见 （一般情况下）
	bootstrap: [AppComponent]
})
export class AppModule { }
