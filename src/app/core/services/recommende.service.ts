import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Recommended } from '@app/core/models/model.recommended';
import { delay } from 'rxjs/operators';


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
        return this.apiService.get(`/recomendado${query}`);
    }

}
