import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, CommonsService } from '@app/core/services';
import { AuthService } from '@app/core/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    submitted: boolean = false;
    loader: boolean = false;

    errorMessage: boolean = false;

    constructor(
        private fb: FormBuilder,
        private commonService: CommonsService,
        private userService: UserService,
        private router: Router,
        private authService: AuthService
    ) {
        this.buildForm();
    }

    ngOnInit() {
    }

    onLogin() {
        this.submitted = true;
        this.errorMessage = false;
        if (this.form.valid) {
            this.loader = true;
            this.userService.login(this.form.value).subscribe((success: any) => {
                this.loader = false;
                const currentUser = success.usuario;
                this.authService.subjectUser.next(currentUser);
                window.localStorage.setItem('token', success.token);
                this.router.navigateByUrl('/recommended-workers');
            }, (error) => {
                this.loader = false;
                if (error.status === 400) {
                    this.errorMessage = true;
                } else {
                    alert('Oops!!, Estamos teniendo problemas con nuestra aplicación, intentelo en otro momento, Gracias!.');
                }
            });
        }
    }

    buildForm() {
        this.form = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            contrasena: ['', Validators.required]
        });
    }

    controlInput(input) {
        return this.commonService.validateInput(input, this.submitted);
    }

}
