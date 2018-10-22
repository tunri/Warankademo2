import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Job} from '@app/core/models';

@Injectable({
    providedIn: 'root'
})
export class JobsService {

    constructor(private apiService: ApiService) {
    }

    findAll(): Observable<Job[]> {
        return this.apiService.get('/oficio');
    }
}
