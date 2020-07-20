import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { Job } from '@app/core/models';

@Injectable({
    providedIn: 'root'
})
export class JobsService {

    constructor(private apiService: ApiService) {
    }

    findAll(): Observable<Job[]> {
        // return this.apiService.get('/oficio');
        return of([
            { oficio_id: 100, descripcion: '', nombre: 'Carpintero' },
            { oficio_id: 200, descripcion: '', nombre: 'Electricista' },
            { oficio_id: 300, descripcion: '', nombre: 'Pintor' },
            { oficio_id: 400, descripcion: '', nombre: 'Gasfitero' }
        ])
    }
}
