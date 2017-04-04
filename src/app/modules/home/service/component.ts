import { UOW } from './../../../repository/unit-of-work.class';
import { ServiceSale } from './../../../domain/service-sale.class';
import { ModalComponent } from './../../../base/component/modal/component';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
    selector: 'app-service-sale',
    templateUrl: 'component.html'
})
export class ServiceSaleComponent implements OnInit {

    @ViewChild('createSaleModal')
    private createSaleModal: ModalComponent;
    private saleModel: ServiceSale = new ServiceSale();
    private serviceSaleList: ServiceSale[] = [];

    constructor(private uow: UOW){ }

    ngOnInit(): void {
        this.reload();
    }

    public reload(){
        this.uow.serviceSaleRepository.getAll()
            .subscribe(data => {
                this.serviceSaleList = data;
            });
    }

    public cancel(){
        this.saleModel = new ServiceSale();
        this.createSaleModal.close();
    }

    public save(){
        this.uow.serviceSaleRepository.save(this.saleModel)
            .subscribe(() => {
                this.createSaleModal.close();
                this.saleModel = new ServiceSale();
            });
    }

    public like(serviceSale: ServiceSale){
        serviceSale.likes++;
    }

}