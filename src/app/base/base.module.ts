import { ImageComponent } from './component/image/component';
import { ModalComponent } from './component/modal/component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';

@NgModule({
    imports: [RouterModule, CommonModule, FormsModule, SuiModule],
    declarations: [ModalComponent, ImageComponent],
    exports: [RouterModule, CommonModule, FormsModule, SuiModule, ModalComponent, ImageComponent]
})
export class BaseModule{}