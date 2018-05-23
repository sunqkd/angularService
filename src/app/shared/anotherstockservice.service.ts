import { Injectable } from '@angular/core';
import { StockService, Stock } from './stock.service';

@Injectable()
export class AnotherstockserviceService implements StockService{

	getStock(): Stock { // 实现StockService 实现的方法
		return new Stock(2,'微软')
	}
  	constructor() { }

}
