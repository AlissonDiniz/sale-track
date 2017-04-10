import { ProductSale } from './../domain/product-sale.class';
import { Observable, Observer } from 'rxjs/Rx';

export class ProductSaleRepository {

    constructor(private cache: ProductSale[]){}

    public getAll(): Observable<ProductSale[]> {
        return Observable.create((subscribe: Observer<ProductSale[]>) => {
            subscribe.next(this.cache);
        });
    }

    public save(instance: ProductSale): Observable<void> {
        return Observable.create((subscribe: Observer<void>) => {
            this.cache.push(instance);
            subscribe.next(null);
        });
    }

}