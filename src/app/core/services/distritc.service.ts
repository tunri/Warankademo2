// import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';
import { mockDataDistricts } from '../mock/districts.mock';
import { District } from '../models/model.district';
import { Observable, of } from 'rxjs';

export class DistrictService {

    private static instance: DistrictService;


    public static getInstance(): DistrictService {
        if (!DistrictService.instance) {
            DistrictService.instance = new DistrictService();
        }

        return DistrictService.instance;
    }

    findAll(): Observable<District[]> {
        // return this.apiService.get('/oficio/distrito');
        const districts = mockDataDistricts.map(item => new District(item.id, item.nombre));
        return of(districts)
    }
}
