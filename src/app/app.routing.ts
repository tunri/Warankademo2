import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule,} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './website/website.module#WebsiteModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'recommended-workers',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
];
const routerRoot: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
    imports: [routerRoot],
    exports: [RouterModule]
})
export class RoutingAppModule {

}
