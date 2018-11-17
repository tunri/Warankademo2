import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { DialogListComponent } from '../dialog-list/dialog-list.component';
import { ListService } from '@app/core/services/list.service';
import { AuthService } from '@app/core/services/auth.service';
@Component({
    selector: 'app-list-favorites-worker',
    templateUrl: './list-favorites-worker.component.html',
    styleUrls: ['./list-favorites-worker.component.scss']
})
export class ListFavoritesWorkerComponent implements OnInit {
    lists: any[] = [];
    loader: boolean = true;
    user: any;
    constructor(public dialog: MatDialog,
        private snackBar: MatSnackBar,
        private ListService: ListService,
        private authService: AuthService,
    ) { }

    ngOnInit() {
        this.authService.subjectUser.subscribe(user => this.user = user);
        this.getList();
    }

    getList() {
        this.ListService.findAll(this.user.usuario_id).subscribe(lists => {
            this.lists = lists
            this.loader = false;
        })
    }

    openDialogList(ev): void {
        const dialogRef = this.dialog.open(DialogListComponent, {
            width: '540px',
            data: {
                user: this.user
            }
        });
        dialogRef.afterClosed().subscribe(response => {
            if (response) {
                this.lists.push(response);
                this.snackBar.open('Lista Creada!', '', {
                    duration: 2000,
                });
            }
        })
    };

}
