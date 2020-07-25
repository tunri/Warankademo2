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


    getRecomendados(query: any): Observable<any[]> {




        const users = JSON.parse(window.localStorage.getItem('users')) || [];
        const allUsers = mockDataRecommended.concat(users);

        if (!query) return of(allUsers);

        const distritos: any[] = query.distritos; // [id]
        const oficios: any[] = query.oficios; // [id]

        const filteredUsers = this.getFilteredUsers(distritos, oficios, allUsers);


        return of(filteredUsers);
    }

    getFilteredUsers(distritos: any[], oficios: any[], users: any[]): any[] {

        if (distritos.length === 0 && oficios.length === 0) return users;
        else if (distritos.length === 0 && oficios.length > 0) return users.filter((user) => oficios.indexOf(user.oficio.id) > -1)
        else if (distritos.length > 0 && oficios.length === 0) return users.filter((user) => distritos.indexOf(user.distrito.id) > -1)
        else (distritos.length > 0 && oficios.length > 0)
        return users.filter((user) => distritos.indexOf(user.distrito.id) > -1 && oficios.indexOf(user.oficio.id) > -1);
    }

    getRecomendadById(id: number): Observable<any> {
        const _recommend = mockDataRecommended.find(item => item.id === id);

        if (!_recommend) return of(null);
        return of(_recommend);

    }

};

export default RecomendadoService;
