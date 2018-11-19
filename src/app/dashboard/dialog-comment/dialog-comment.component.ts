import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RecommendeService } from '@app/core/services/recommende.service';
import { AuthService } from '@app/core/services/auth.service';

@Component({
    selector: 'app-dialog-comment',
    templateUrl: './dialog-comment.component.html',
    styleUrls: ['./dialog-comment.component.scss']
})
export class DialogCommentComponent implements OnInit {

    comment: string = '';
    loader: boolean = false;
    worker: any = {}
    user: any = {};

    constructor(
        private dialogRef: MatDialogRef<DialogCommentComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
        private RecommendedService: RecommendeService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.authService.subjectUser.subscribe(user => this.user = user);
        this.worker = this.data.worker;
    }
    close(ev): void {
        this.dialogRef.close(false);
    }
    send(): void {
        let comment = this.comment.trim();
        if (comment.length) {
            this.loader = true;
            this.RecommendedService.feeds({
                valor: comment,
                fecha: new Date(),
                atributo_id: 2,
                telefono: this.worker.telefono,
                owner: `${this.user.nombres} ${this.user.apellidos}`
            }).subscribe(response => this.dialogRef.close(response));
        }
    }
}
