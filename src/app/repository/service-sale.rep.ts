import { Context } from './../core/context.class';
import { ServiceSale } from './../domain/service-sale.class';
import { Observable, Observer } from 'rxjs/Rx';

export class ServiceSaleRepository {

    constructor(private context: Context){}

    public getAll(): Observable<ServiceSale[]> {
        return Observable.create((subscribe: Observer<ServiceSale[]>) => {
            subscribe.next(this.context.serviceSaleList);
        });
    }

    public save(instance: ServiceSale): Observable<void> {
        return Observable.create((subscribe: Observer<void>) => {
            this.context.serviceSaleList.push(instance);
            subscribe.next(null);
        });
    }

}