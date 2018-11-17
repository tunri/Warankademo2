import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class ListService {

    constructor(private apiService: ApiService) {
    }

    create(body: any): Observable<any> {
        return this.apiService.post('/lista', body);
    }

    findAll(id): Observable<any> {
        return this.apiService.get(`/lista?usuario_perfil_id=${id}`);
    }
    findOne(id): Observable<any> {
        return this.apiService.get(`/lista?lista_id=${id}`);
    }

}
