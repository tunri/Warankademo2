import { Component, OnInit } from '@angular/core';
import { RecommendeService } from '@app/core/services/recommende.service';
import { ActivatedRoute } from '@angular/router';
import { Recommended } from '@app/core/models/model.recommended';
import { ListService } from '@app/core/services/list.service';

import { MatDialog } from '@angular/material';
import { DialogCommentComponent } from '../dialog-comment/dialog-comment.component';


import { MatSnackBar } from '@angular/material';
import { zip, Observable } from 'rxjs';
import { DialogAddRecommeneddComponent } from '../dialog-add-recommenedd/dialog-add-recommenedd.component';

import RecommendadoService from '@app/core/services/recomendados.service';
import { finalize } from 'rxjs/operators';


@Component({
    selector: 'app-profile-worker',
    templateUrl: './profile-worker.component.html',
    styleUrls: ['./profile-worker.component.scss']
})
export class ProfileWorkerComponent implements OnInit {

    Worker: Recommended;
    loader: boolean = true;
    phone: string;
    comments: any[] = [];
    counterLike: number = 0;
    counterShare: number = 0;

    recomendadoService = RecommendadoService.getInstance();

    constructor(
        private RecommendService: RecommendeService,
        private route: ActivatedRoute,
        private ListService: ListService,
        public dialog: MatDialog,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {

        this.getRecomendado(1000);
    }

    // private getFeeds(): Observable<any> {
    //     return this.RecommendService.findFeeds(`?telefono=${this.phone}`)
    // }

    private getUser(): Observable<any> {
        return this.RecommendService.findAll(`?telefono=${this.phone}`)
    }

    private getRecomendado(id: number): void {
        this.loader = true;
        this.recomendadoService.getRecomendadById(id)
            .pipe(finalize(() => this.loader = false))
            .subscribe(response => {
                this.Worker = response;
            })
    }

    addList() {
        this.ListService.create({
            telefono: this.phone,
            lista_id: 1
        }).subscribe(response => {
            console.log(response, 'Agregado');
        })
    }
    openDialogComment(ev): void {
        const dialogRef = this.dialog.open(DialogCommentComponent, {
            width: '600px',
            data: {
                worker: this.Worker
            }
        });
        dialogRef.afterClosed().subscribe(response => {
            if (response) {
                this.comments.unshift(response);
                //add comment
                this.toast('Comentario Agregado');
            }
        })
    };

    openDialogAddRecommended(): void {
        const dialogRef = this.dialog.open(DialogAddRecommeneddComponent, {
            width: '600px',
            data: {
                worker: this.Worker
            }
        });
        dialogRef.afterClosed().subscribe(response => {
            if (response) {
                this.toast('Agregado a Mis Listas!');;
            }
        })
    }

    /**
     * event like it
     */
    // likeOrShare(id): void {
    //     this.RecommendService.feeds({
    //         valor: '',
    //         fecha: new Date(),
    //         atributo_id: id,
    //         telefono: this.Worker.telefono
    //     }).subscribe(response => {
    //         let message = (id === 1) ? 'Me gusta' : 'Compartido';
    //         if (id === 1) {
    //             this.counterLike++;
    //         }
    //         if (id === 3) {
    //             this.counterShare++;
    //         }
    //         this.toast(message);
    //     })
    // }

    private toast(message: string): void {
        this.snackBar.open(message, '', {
            duration: 2000,
        });
    }
    getSanitizaUrl(property) {
        return `url('${property}')`;
    }
}
