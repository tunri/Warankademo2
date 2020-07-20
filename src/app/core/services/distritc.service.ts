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
        // return this.apiService.get('/oficio/distrito');
        return of([
            {id: 100,nombre:'Miraflores'},
            {id: 200,nombre:'Jesus Maria'},
            {id: 300,nombre:'San Juan de Lurigancho'},
            {id: 400,nombre:'San Luis'}
        ])
    }
}
