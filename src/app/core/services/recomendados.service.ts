import { mockDataRecommended } from "../mock/recommended.mock";
import { Recommended } from "../models/model.recommended";
import { Observable, of } from "rxjs";
import { Job } from "../models";

// Singleton para service
class RecomendadoService {

    private static instance: RecomendadoService;


    public static getInstance(): RecomendadoService {
        if (!RecomendadoService.instance) {
            RecomendadoService.instance = new RecomendadoService();
        }

        return RecomendadoService.instance;
    }


    getRecomendados(): Observable<any[]> {
        const users = JSON.parse(window.localStorage.getItem('users')) || [];
        const allUsers = mockDataRecommended.concat(users);
        return of(allUsers)
    }

    getRecomendadById(id: number): Observable<any> {
        const _recommend = mockDataRecommended.find(item => item.id === id);

        if (!_recommend) return of(null);
        return of(_recommend);
        // return of(new Recommended(_recommend.id, _recommend.nombres, _recommend.apellidos, _recommend.telefono, _recommend.descripcion, _recommend.foto, new Job(_recommend.oficio.id, _recommend.oficio.nombre)));

    }

};

export default RecomendadoService;
