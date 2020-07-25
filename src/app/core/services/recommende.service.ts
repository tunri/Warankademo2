import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { Recommended } from '@app/core/models/model.recommended';
import { mockDataRecommended } from '../mock/recommended.mock';
import { Job } from '../models';


@Injectable({
    providedIn: 'root'
})
export class RecommendeService {

    constructor(private apiService: ApiService) {
    }

    create(body: any): Observable<any> {
        return this.apiService.post('/recomendado', body);
    }

    findAll(query: string): Observable<Recommended[]> {
        // return this.apiService.get(`/recomendado${query}`);
        const recommended = mockDataRecommended.map(item => new Recommended(item.id, item.nombres, item.apellidos, item.telefono, item.descripcion, item.foto, new Job(item.oficio.id, item.oficio.nombre)));
        return of(recommended)
    }

    // feeds(body: object = {}): Observable<any> {
    //     return this.apiService.post(`/atributo`, body);
    // }

    // findFeeds(query): Observable<any> {
    //     return this.apiService.get(`/atributo${query}`);
    // }
    // uploadPicture(body): Observable<any> {
    //     return this.apiService.postFormData('/recomendado/upload/', body);
    // }




}
