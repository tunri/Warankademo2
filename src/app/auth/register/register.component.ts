import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonsService, UserService } from '@app/core/services';

import { Router, ActivatedRoute } from '@angular/router';
import { User } from '@app/core/models';
import { AuthService } from '@app/core/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    form: FormGroup;
    submitted: boolean = false;
    loader: boolean = false;
    errorAuth: boolean = false;
    regexStr = '[0-9]{9}';
    queryParams: object = {};

    errorProperty: string = undefined;

    constructor(
        private fb: FormBuilder,
        private commonService: CommonsService,
        private router: Router,
        private userService: UserService,
        private authService: AuthService,
        private route: ActivatedRoute
    ) {
        this.buildForm();
    }

    ngOnInit() {
        this.getQueryParams();
        this.onChangePropertyError();
    }

    onChangePropertyError() {
        const form = this.form;
        form.valueChanges.subscribe(res => {
            const prop = this.form.get(this.errorProperty);
            if (prop) {
                prop.valueChanges.subscribe(res => {
                    this.errorProperty = undefined;
                    this.errorAuth = false;
                });
            }
        });
    }

    buildForm() {
        this.form = this.fb.group({
            nombres: ['', Validators.required],
            apellidos: ['', Validators.required],
            telefono: ['', Validators.compose([Validators.required, Validators.pattern(this.regexStr)])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            contrasena: ['', Validators.required]
        });
    }

    onSubmit() {
        this.submitted = true;
        this.errorAuth = false;
        if (this.form.valid) {
            this.loader = true;
            const user: User = Object.assign({}, this.form.value, { usuario_perfil: { perfil_id: 1 } });
            this.userService.register(user).subscribe(response => {
                this.loader = false;
                this.userService.login({
                    email: response.email,
                    contrasena: user.contrasena
                }).subscribe((authUser: any) => {
                    const currentUser = authUser.usuario;
                    this.authService.subjectUser.next(currentUser);
                    window.localStorage.setItem('token', authUser.token);
                    this.router.navigate(['/recommended-workers'], {
                        queryParams: this.queryParams
                    });
                });
            }, (error) => {
                this.loader = false;
                if (error.status === 400) {
                    this.errorAuth = true;
                    const mistakes = ['email', 'telefono'];
                    const property = Object.keys(error.fieldsError)[0];
                    if (mistakes.indexOf(property) > -1) {
                        this.errorProperty = property;
                    }
                } else {
                    /**
                     * Error server : 500 and 502
                     */
                    alert('Oops!!, Estamos teniendo problemas con nuestra aplicación, intentelo en otro momento, Gracias!.');
                }
            });
        }
    }

    controlInput(input) {
        return this.commonService.validateInput(input, this.submitted);
    }

    private getQueryParams(): void {
        this.queryParams = this.route.snapshot.queryParams;
    }


}
