import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RecommendedWorkersComponent } from "./recommendedWorkers/recommendedWorker.component";
import { ProfileWorkerComponent } from "./profile-worker/profile-worker.component";
import { CreateWorkerComponent } from "./create-worker/create-worker.component";
import { ListFavoritesWorkerComponent } from "./list-favorites-worker/list-favorites-worker.component";
import { LayoutDashboardComponent } from "./layout/layout.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutDashboardComponent,
        children: [
            {
                path: '',
                component: RecommendedWorkersComponent
            },
            {
                path: ':workerId/profile',
                component: ProfileWorkerComponent
            },
            {
                path: 'create-worker',
                component: CreateWorkerComponent
            },
            {
                path: 'favorite-workers',
                component: ListFavoritesWorkerComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingDashboardModule { }