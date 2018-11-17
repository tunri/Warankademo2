// modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDividerModule
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
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatDividerModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatDividerModule
    ],
    declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule {
}
