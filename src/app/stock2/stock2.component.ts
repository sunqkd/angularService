import { Component, OnInit, Injector } from '@angular/core';
import { StockService, Stock } from '../shared/stock.service';
// import { AnotherstockserviceService } from '../shared/anotherstockservice.service';

@Component({
	selector: 'app-stock2',
	templateUrl: './stock2.component.html',
	styleUrls: ['./stock2.component.css'],
	// providers: [{provide:StockService, useClass:AnotherstockserviceService}] // 提供器
}) 
export class Stock2Component implements OnInit {

	private stock:Stock;

	// 两种注入 使用方法
	// constructor(public stockService: StockService;){}  
	// 尽量不使用第二种方法（一种错误的风格）
	public stockService: StockService;
	
	constructor(public injector: Injector) { 
		this.stockService = injector.get(StockService)
	}  // 注入器

	ngOnInit() {
		this.stock = this.stockService.getStock()
	}

}
