import { CommentComponent } from './../../../base/component/comment/component';
import { UOW } from './../../../repository/unit-of-work.class';
import { ServiceSale } from './../../../domain/service-sale.class';
import { ModalComponent } from './../../../base/component/modal/component';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
    selector: 'app-flight-sale',
    templateUrl: 'component.html'
})
export class FlightSaleComponent implements OnInit {

    @ViewChild('createSaleModal')
    private createSaleModal: ModalComponent;
    @ViewChild('commentComponent')
    private commentComponent: CommentComponent;
    private saleModel: ServiceSale = new ServiceSale();
    private serviceSaleList: ServiceSale[] = [];

    constructor(private uow: UOW){ }

    ngOnInit(): void {
        this.reload();
    }

    public reload(){
        this.uow.flightSaleRepository.getAll()
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

    public openComments(serviceSale: ServiceSale){
        this.commentComponent.open(serviceSale.commentList);
    }

}