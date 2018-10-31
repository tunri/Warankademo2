import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout-worker',
    templateUrl: './layout.dashboard.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutDashboardComponent implements OnInit {

    user: any = {};
    constructor(
        private authService: AuthService,
        private router:Router
    ) { }

    ngOnInit() {
        this.authService.subjectUser.subscribe(user => this.user = user);
    }

    onLogout() {
        this.authService.subjectUser.next({});
        window.localStorage.clear();
        this.router.navigateByUrl('/');
    }

}
