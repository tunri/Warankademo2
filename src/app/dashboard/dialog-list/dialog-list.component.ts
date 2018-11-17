import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CommonsService } from '@app/core/services';
import { ListService } from '@app/core/services/list.service';

@Component({
    selector: 'app-dialog-list',
    templateUrl: './dialog-list.component.html',
    styleUrls: ['./dialog-list.component.scss']
})
export class DialogListComponent implements OnInit {

    form: FormGroup;
    submitted: boolean = false;
    loader: boolean = false;
    user: any = {};

    constructor(
        private dialogRef: MatDialogRef<DialogListComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
        private fb: FormBuilder,
        private commonService: CommonsService,
        private ListaService: ListService
    ) {
        this.user = data.user;
        this.buildForm();
    }

    ngOnInit() {

    }

    buildForm() {
        this.form = this.fb.group({
            nombre: ['', Validators.required],
            descripcion: ['', Validators.required],
            usuario_perfil_id: [this.user.usuario_id],
            estado: [1],
        });
    }
    close(ev): void {
        this.dialogRef.close(false);
    }
    onSubmit(): void {
        this.submitted = true;
        if (this.form.valid) {
            this.loader = true;
            let body = this.form.value;
            this.ListaService.create(body).subscribe(result => this.dialogRef.close(result));
        }
    }

    controlInput(input) {
        return this.commonService.validateInput(input, this.submitted);
    }

}
