import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
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
        // return this.apiService.get(`/recomendado${query}`);
        return of([
            {
                nombres: 'Antonio',
                apellidos: 'Vargas',
                direccion: 'Mz A Lt 21 Av Peru',
                telefono: '921665332',
                descripcion: 'Soy Carpintero',
                foto: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
                facebook: 'www.antonio.com',
                twitter: 'www.antonio.com',
                usuario_perfil_id: 11
            },
            {
                usuario_perfil_id: 12,
                nombres: 'Richard',
                apellidos: 'Quis',
                direccion: 'Mz A Lt 21 Av Peru',
                telefono: '921665332',
                descripcion: 'Soy Gasfitero',
                foto: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
                facebook: 'www.antonio.com',
                twitter: 'www.antonio.com'
            },
            {
                usuario_perfil_id: 13,
                nombres: 'Richard',
                apellidos: 'Quis',
                direccion: 'Mz A Lt 21 Av Peru',
                telefono: '921665332',
                descripcion: 'Soy Gasfitero',
                foto: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
                facebook: 'www.antonio.com',
                twitter: 'www.antonio.com'
            },
            {
                usuario_perfil_id: 16,
                nombres: 'Richard',
                apellidos: 'Quis',
                direccion: 'Mz A Lt 21 Av Peru',
                telefono: '921665332',
                descripcion: 'Soy Gasfitero',
                foto: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
                facebook: 'www.antonio.com',
                twitter: 'www.antonio.com'
            },
            {
                nombres: 'Richard',
                apellidos: 'Quis',
                direccion: 'Mz A Lt 21 Av Peru',
                telefono: '921665332',
                descripcion: 'Soy Gasfitero',
                foto: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
                facebook: 'www.antonio.com',
                twitter: 'www.antonio.com',
                usuario_perfil_id: 30
            }
        ])
    }

    feeds(body: object = {}): Observable<any> {
        return this.apiService.post(`/atributo`, body);
    }

    findFeeds(query): Observable<any> {
        return this.apiService.get(`/atributo${query}`);
    }
    uploadPicture(body): Observable<any> {
        return this.apiService.postFormData('/recomendado/upload/', body);
    }




}
