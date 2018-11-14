import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDashboardComponent } from './layout/layout.component';
import { RecommendedWorkersComponent } from './recommendedWorkers/recommendedWorker.component';
import { ProfileWorkerComponent } from './profile-worker/profile-worker.component';
import { CreateWorkerComponent } from './create-worker/create-worker.component';
import { ListFavoritesWorkerComponent } from './list-favorites-worker/list-favorites-worker.component';
import { RoutingDashboardModule } from './dashboard.routing';
import { SharedModule } from '../shared/shared.module';
import { WorkerComponent } from './worker/worker.component';
import { MatAutocompleteModule, MatMenuModule, MatPaginatorModule, MatTooltipModule, MatDialogModule } from '@angular/material';
import { DialogCommentComponent } from './dialog-comment/dialog-comment.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
    imports: [
        CommonModule,
        RoutingDashboardModule,
        SharedModule,
        MatAutocompleteModule,
        MatMenuModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatDialogModule
    ],
    declarations: [
        LayoutDashboardComponent,
        RecommendedWorkersComponent,
        ProfileWorkerComponent,
        CreateWorkerComponent,
        ListFavoritesWorkerComponent,
        WorkerComponent,
        DialogCommentComponent,
        CommentComponent
    ],
    entryComponents: [DialogCommentComponent]
})
export class DashboardModule {
}
