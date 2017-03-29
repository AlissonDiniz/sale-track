import { JQuery } from './../../jquery.class';
import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: 'component.html'
})
export class ModalComponent implements OnInit{

    @ViewChild('modal')
    private modal: ElementRef;
    @Input('title')
    private title: string;
    @Input('length')
    private length: string;
    private jqueryModal: JQuery;


    ngOnInit(){
        this.jqueryModal = new JQuery(this.modal.nativeElement);
    }

    public open(){
        this.jqueryModal.openModal();
    }

    public close(){
        this.jqueryModal.closeModal();
    }

}