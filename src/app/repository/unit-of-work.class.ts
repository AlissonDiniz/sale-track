import { ProductSaleRepository } from './product-sale.rep';
import { Context } from './../core/context.class';
import { Injectable } from '@angular/core';

@Injectable()
export class UOW {

    private _context: Context;
    private _productSaleRepository: ProductSaleRepository;

    constructor(){
        this._context = new Context();
        this._productSaleRepository = new ProductSaleRepository(this._context);
    }

    public get productSaleRepository(): ProductSaleRepository {
        return this._productSaleRepository;
    }

}