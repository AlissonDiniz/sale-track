import { ServiceSale } from './../domain/service-sale.class';
import { Observable, Observer } from 'rxjs/Rx';

export class ServiceSaleRepository {

    constructor(private cache: ServiceSale[]){}

    public getAll(): Observable<ServiceSale[]> {
        return Observable.create((subscribe: Observer<ServiceSale[]>) => {
            subscribe.next(this.cache);
        });
    }

    public save(instance: ServiceSale): Observable<void> {
        return Observable.create((subscribe: Observer<void>) => {
            this.cache.push(instance);
            subscribe.next(null);
        });
    }

}