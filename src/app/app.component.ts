import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services';
import { AuthService } from './core/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private userService: UserService,
        private authService: AuthService
    ) { }
    ngOnInit() {
        if (window.localStorage.getItem('token')) {
            this.userService.getCurrentUser().subscribe(res => {
                this.authService.subjectUser.next(res);
            });
        }
    }
}
