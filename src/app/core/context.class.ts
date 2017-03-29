import { ProductSale } from './../domain/product-sale.class';

export class Context {

    private _productSaleList: ProductSale[];

    constructor(){
        this._productSaleList = [];
    }

    public get productSaleList(): ProductSale[] {
        return this._productSaleList;
    }

}
