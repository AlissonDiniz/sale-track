import { HomeComponent } from './component';
import { BaseModule } from './../../base/base.module';
import { Routing } from './route';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HomeComponent],
    imports: [Routing, BaseModule],
    providers: [],
    exports: []
})
export class HomeModule{}
