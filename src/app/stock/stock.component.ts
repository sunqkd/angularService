import { Component, OnInit } from '@angular/core';
import { StockService, Stock } from '../shared/stock.service';

@Component({
	selector: 'app-stock',
	templateUrl: './stock.component.html',
	styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
	
	private stock:Stock

	constructor(public stockService:StockService) { }  // 注入器

	ngOnInit() {
		this.stock = this.stockService.getStock();
	}

}
