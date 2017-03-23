import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'component.html'
})
export class HomeComponent implements OnInit {

    private productSaleList: {image: string, label: string, value: number, description: string}[] = [];

    ngOnInit(): void {
        this.productSaleList.push({image: '', label: 'Nike Biscuit 2 SL', value: 249.90, description: 'Tenha um aliado na busca por performance nos treinos, com o novo Tênis Nike Dart 12 MSL. Sua estrutura leve e macia, garante ótimo ajuste nos pés, conferindo mais dinamismo as passadas'});

    }

}