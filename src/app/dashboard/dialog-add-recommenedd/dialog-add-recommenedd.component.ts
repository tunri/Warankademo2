import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { ListService } from '@app/core/services/list.service';
import { AuthService } from '@app/core/services/auth.service';
import { zip } from 'rxjs';

@Component({
    selector: 'app-dialog-add-recommenedd',
    templateUrl: './dialog-add-recommenedd.component.html',
    styleUrls: ['./dialog-add-recommenedd.component.scss']
})
export class DialogAddRecommeneddComponent implements OnInit {
    user: any;
    lists: any[] = [];
    loader: boolean = true;
    selected: any[] = [];
    worker: any = {};

    constructor(private dialogRef: MatDialogRef<DialogAddRecommeneddComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
        private fb: FormBuilder,
        private ListaService: ListService,
        private authService: AuthService
    ) {

    }

    ngOnInit() {
        this.authService.subjectUser.subscribe(user => this.user = user);
        this.worker = this.data.worker;
        this.getList();
    }

    send(): void {
        console.log(this.selected);
        if (!this.selected.length) return;
        let nPromises = [];

        this.selected.forEach(id => {
            nPromises.push(this.ListaService.linkToRecommended({
                telefono: Number(this.worker.telefono),
                lista_id: id
            }))
        });
        const result = zip(...nPromises);
        result.subscribe(res => {
            this.dialogRef.close(res);
        });
    }

    getList() {
        this.ListaService.findAll(this.user.usuario_id).subscribe(lists => {
            // lists.forEach(element => {
            //     element.checked = false;
            // });
            console.log(lists);
            this.lists = lists;
            this.loader = false;
        });
    }
    toggleChecked(item): void {
        var idx = this.selected.indexOf(item.lista_id);
        if (idx > -1) {
            this.selected.splice(idx, 1);
        }
        else {
            this.selected.push(item.lista_id);
        }
    }

    close(ev): void {
        this.dialogRef.close(false);
    }

}
