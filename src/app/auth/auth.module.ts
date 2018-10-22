import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RoutingAuthModule} from './auth.routing';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonsService, UserService} from '@app/core/services';


@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RoutingAuthModule,
        SharedModule
    ],
    declarations: [LoginComponent, RegisterComponent],
    providers: [CommonsService, UserService]
})
export class AuthModule {
}
