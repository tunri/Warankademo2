import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutDashboardComponent} from './layout/layout.component';
import {RecommendedWorkersComponent} from './recommendedWorkers/recommendedWorker.component';
import {ProfileWorkerComponent} from './profile-worker/profile-worker.component';
import {CreateWorkerComponent} from './create-worker/create-worker.component';
import {ListFavoritesWorkerComponent} from './list-favorites-worker/list-favorites-worker.component';
import {RoutingDashboardModule} from './dashboard.routing';
import {SharedModule} from '../shared/shared.module';
import {WorkerComponent} from './worker/worker.component';
import { MatAutocompleteModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RoutingDashboardModule,
        SharedModule,
        MatAutocompleteModule
    ],
    declarations: [
        LayoutDashboardComponent,
        RecommendedWorkersComponent,
        ProfileWorkerComponent,
        CreateWorkerComponent,
        ListFavoritesWorkerComponent,
        WorkerComponent]
})
export class DashboardModule {
}
