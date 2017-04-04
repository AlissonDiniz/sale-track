import { ServiceSaleComponent } from './service/component';
import { ProductSaleComponent } from './product/component';
import { RepositoryModule } from './../../repository/repository.module';
import { HomeComponent } from './component';
import { BaseModule } from './../../base/base.module';
import { Routing } from './route';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HomeComponent, ProductSaleComponent, ServiceSaleComponent],
    imports: [Routing, BaseModule, RepositoryModule],
    providers: [],
    exports: []
})
export class HomeModule{}
