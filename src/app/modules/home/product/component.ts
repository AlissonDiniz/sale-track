import { CommentComponent } from './../../../base/component/comment/component';
import { UOW } from './../../../repository/unit-of-work.class';
import { ProductSale } from './../../../domain/product-sale.class';
import { ModalComponent } from './../../../base/component/modal/component';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-sale',
    templateUrl: 'component.html'
})
export class ProductSaleComponent implements OnInit {

    @ViewChild('createSaleModal')
    private createSaleModal: ModalComponent;
    @ViewChild('commentComponent')
    private commentComponent: CommentComponent;
    private searchModel: {value: string, status: string} = {value: '', status: ''};
    private saleModel: ProductSale = new ProductSale();
    private productSaleList: ProductSale[] = [];
    private productSaleListFiltered: ProductSale[] = [];

    constructor(private uow: UOW){ }

    ngOnInit(): void {
        this.reload();
    }

    public reload(){
        this.uow.productSaleRepository.getAll()
            .subscribe(data => {
                this.productSaleList = data;
                this.productSaleListFiltered = data;
                this.productSaleList.sort((p1, p2) => p1.timestamp < p2.timestamp ? 1 : -1);
            });
    }

    public search(){
        this.searchModel.status = 'loading';
        this.productSaleListFiltered = this.productSaleList.filter((it) => {
            let check = false;
            if(it.name.indexOf(this.searchModel.value) > -1){
                check = true;
            }
            if(it.description.indexOf(this.searchModel.value) > -1){
                check = true;
            }
            if(check){
                return it;
            }
        });
        this.searchModel.status = '';
    }

    public cancel(){
        this.saleModel = new ProductSale();
        this.createSaleModal.close();
    }

    public save(){
        this.uow.productSaleRepository.save(this.saleModel)
            .subscribe(() => {
                this.createSaleModal.close();
                this.saleModel = new ProductSale();
            });
    }

    public like(productSale: ProductSale){
        productSale.likes++;
    }

    public openComments(productSale: ProductSale){
        this.commentComponent.open(productSale.commentList);
    }

}