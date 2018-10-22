import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {DistrictMock} from '../mock/districts.mock';
import {District} from '../models/district.model';
import {from, Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DistrictService {

    constructor(private apiService: ApiService) {
    }

    findAll(): Observable<District[]> {
        return of(DistrictMock);
        // return this.apiService.get('/oficio/distrito');
    }
}
