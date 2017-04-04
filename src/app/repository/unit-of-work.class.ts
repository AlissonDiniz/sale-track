import { ServiceSaleRepository } from './service-sale.rep';
import { ProductSaleRepository } from './product-sale.rep';
import { Context } from './../core/context.class';
import { Injectable } from '@angular/core';

@Injectable()
export class UOW {

    private _context: Context;
    private _productSaleRepository: ProductSaleRepository;
    private _serviceSaleRepository: ServiceSaleRepository;

    constructor(){
        this._context = new Context();
        this._productSaleRepository = new ProductSaleRepository(this._context);
        this._serviceSaleRepository = new ServiceSaleRepository(this._context);
    }

    public get productSaleRepository(): ProductSaleRepository {
        return this._productSaleRepository;
    }

    public get serviceSaleRepository(): ServiceSaleRepository {
        return this._serviceSaleRepository;
    }

}