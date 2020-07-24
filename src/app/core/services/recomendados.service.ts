import { mockDataRecommended } from "../mock/recommended.mock";
import { Recommended } from "../models/model.recommended";
import { Observable, of } from "rxjs";

// Singleton para service
class RecommendadoService {

    private static instance: RecommendadoService;


    public static getInstance(): RecommendadoService {
        if (!RecommendadoService.instance) {
            RecommendadoService.instance = new RecommendadoService();
        }

        return RecommendadoService.instance;
    }


    getRecomendados(): Observable<Recommended[]> {
        const recommended = mockDataRecommended.map(item => new Recommended(item.id, item.nombres, item.apellidos, item.telefono, item.descripcion, item.foto, item.oficio));
        return of(recommended)
    }

    getRecomendadById(id: number): Observable<Recommended> {
        const _recommend = mockDataRecommended.find(item => item.id === id);

        if (!_recommend) return of(null);

        return of(new Recommended(_recommend.id, _recommend.nombres, _recommend.apellidos, _recommend.telefono, _recommend.descripcion, _recommend.foto, _recommend.oficio));

    }

};

export default RecommendadoService;
