import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { ListService } from '@app/core/services/list.service';
import { AuthService } from '@app/core/services/auth.service';

@Component({
    selector: 'app-dialog-add-recommenedd',
    templateUrl: './dialog-add-recommenedd.component.html',
    styleUrls: ['./dialog-add-recommenedd.component.scss']
})
export class DialogAddRecommeneddComponent implements OnInit {
    user: any;
    lists: any[] = [];
    loader: boolean = true;
    constructor(private dialogRef: MatDialogRef<DialogAddRecommeneddComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
        private fb: FormBuilder,
        private ListaService: ListService,
        private authService: AuthService
    ) {

    }

    ngOnInit() {
        this.authService.subjectUser.subscribe(user => this.user = user);
        this.getList();
    }

    getList() {
        this.ListaService.findAll(this.user.usuario_id).subscribe(lists => {
            this.lists = lists;
            this.loader = false;
        });
    }

    close(ev): void {
        this.dialogRef.close(false);
    }

}
