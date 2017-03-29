import { ProductSale } from './../../domain/product-sale.class';
import { ModalComponent } from './../../base/component/modal/component';
import { UOW } from '../../repository/unit-of-work.class';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'component.html'
})
export class HomeComponent implements OnInit {

    @ViewChild('createProductSaleModal')
    private createProductSaleModal: ModalComponent;

    private productSaleList: ProductSale[] = [];
    private producSaleModel: ProductSale = new ProductSale();

    constructor(private uow: UOW){}

    ngOnInit(): void {
        this.reload();
    }

    public reload(){
        this.uow.productSaleRepository.getAll()
            .subscribe(data => {
                this.productSaleList = data;
            });
    }

    public cancel(){
        this.producSaleModel = new ProductSale();
        this.createProductSaleModal.close();
    }

    public save(){
        this.uow.productSaleRepository.save(this.producSaleModel)
            .subscribe(() => this.createProductSaleModal.close());
    }

    public like(productSale: ProductSale){
        productSale.likes++;
    }

}