import { JQuery } from './../../jquery.class';
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-image',
    templateUrl: 'component.html'
})
export class ImageComponent {

    @ViewChild('input')
    private input: ElementRef;
    @Input()
    private model: string;
    @Output()
    private modelChange: EventEmitter<string> = new EventEmitter<string>();

    handleImage(event: any){
        let file = event.target.files[0];
        let self = this;
        if(!file){
            return;
        }
        let reader = new FileReader();
        reader.onload = fileLoader => {
            const target: any = fileLoader.target;
            self.model = 'data:image/png;base64,' + btoa(target.result);
            self.modelChange.next(self.model);
        };
        reader.readAsBinaryString(file);
    }

    clearImage(){
        new JQuery(this.input.nativeElement).setValue('');
        this.model = null;
        this.modelChange.next(this.model);
    }

}