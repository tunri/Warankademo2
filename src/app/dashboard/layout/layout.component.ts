import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';

@Component({
    selector: 'app-layout-worker',
    templateUrl: './layout.dashboard.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutDashboardComponent implements OnInit {

    user: any = {};
    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.authService.subjectUser.subscribe(user => this.user = user);
    }

}
