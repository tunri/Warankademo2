// modules
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
} from '@angular/material';

// components
import {
    HeaderComponent,
    FooterComponent
} from './components';


@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule
    ],
    declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule {
}
