
import {Routes, RouterModule} from '@angular/router';

const mapping: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: 'app/modules/home/module#HomeModule'}
];
export const Routing = RouterModule.forRoot(mapping, {useHash: true});