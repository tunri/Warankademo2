import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnInit {

    subjectUser: any = new BehaviorSubject({});
    currentUser: any;


    constructor() {
        
    }

    ngOnInit() {
        //this.currentUser.subscribe(next => this.currentUser = next);
    }

}
