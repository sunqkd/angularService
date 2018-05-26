import { Component, OnInit } from '@angular/core';
import { StockService, Stock } from '../shared/stock.service';
import { AnotherstockserviceService } from '../shared/anotherstockservice.service';

@Component({
	selector: 'app-stock2',
	templateUrl: './stock2.component.html',
	styleUrls: ['./stock2.component.css'],
	providers: [{provide:StockService, useClass:AnotherstockserviceService}] // 提供器
}) 
export class Stock2Component implements OnInit {

	private stock:Stock;

	constructor(public stockService: StockService) { }  // 注入器

	ngOnInit() {
		this.stock = this.stockService.getStock()
	}

}
