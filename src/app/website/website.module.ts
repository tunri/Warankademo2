// modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@app/shared/shared.module';
import {MatAutocompleteModule} from '@angular/material';

// components
import {LandingComponent} from './landing/landing.component';


// router
const router: Routes = [{
    path: '',
    component: LandingComponent
}];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        SharedModule,
        MatAutocompleteModule
    ],
    declarations: [LandingComponent]
})
export class WebsiteModule {
}
