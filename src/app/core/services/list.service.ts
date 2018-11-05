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
        return this.apiService.post('/lista/recomendado', body);
    }
 

}
