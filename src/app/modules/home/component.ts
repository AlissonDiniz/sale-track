import { ProductSaleComponent } from './product/component';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'component.html'
})
export class HomeComponent {

    @ViewChild('productSaleComponent')
    private productSaleComponent: ProductSaleComponent;

}