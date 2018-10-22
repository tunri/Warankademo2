import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {User} from '@app/core/models';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private apiService: ApiService) {
    }

    register(user: User): Observable<User> {
        return this.apiService.post('/user', user);
    }

    login(credentials: Object): Observable<Object> {
        return this.apiService.post('/user/auth', credentials);
    }

}
