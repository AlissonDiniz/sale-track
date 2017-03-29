import { Context } from './../core/context.class';
import { ProductSale } from './../domain/product-sale.class';
import { Observable, Observer } from 'rxjs/Rx';

export class ProductSaleRepository {

    constructor(private context: Context){}

    public getAll(): Observable<ProductSale[]> {
        return Observable.create((subscribe: Observer<ProductSale[]>) => {
            subscribe.next(this.context.productSaleList);
        });
    }

    public save(instance: ProductSale): Observable<void> {
        return Observable.create((subscribe: Observer<void>) => {
            this.context.productSaleList.push(instance);
            subscribe.next(null);
        });
    }

}