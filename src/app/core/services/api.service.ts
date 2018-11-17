import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private enviroment_api = 'http://104.248.62.225:3000';

    constructor(private http: Http) {
    }

    private setHeader(): Headers {
        const headerConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        if (window.localStorage['token']) {
            headerConfig['Authorization'] = `${window.localStorage['token']}`;
        }

        return new Headers(headerConfig);
    }

    private getErrorProperties(error) {
        const { status } = error;
        const { errors, fields } = error.json();
        return {
            status: status,
            errors: errors || error.json(),
            fieldsError: fields
        };
    }

    private formatError = (error) => throwError(this.getErrorProperties(error));

    get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        return this.http.get(`${this.enviroment_api}${path}`, { headers: this.setHeader(), search: params })
            .pipe(catchError(this.formatError))
            .pipe(map((res: Response) => res.json()));
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(`${this.enviroment_api}${path}`, body, { headers: this.setHeader() })
            .pipe(catchError(this.formatError))
            .pipe(map((res: Response) => res.json()));
    }

    postFormData(path: string, body: Object = {}): Observable<any> {
        let formdata = new FormData();
        let headers = new Headers();
        //headers.append('Content-Type', 'multipart/form-data');
        //headers.append('Accept', 'application/json');
        if (window.localStorage['token']) {
            headers['Authorization'] = `${window.localStorage['token']}`;
        }
        for (const key in body) {
            formdata.append(key, body[key]);
        }
        return this.http.post(`${this.enviroment_api}${path}`, formdata,{headers:headers})
            .pipe(catchError(this.formatError))
            .pipe(map((res: Response) => res.json()));
    }

    // put(path: string, body: Object = {}): Observable<any> {
    //     return this.http.put(`${this.enviroment_api}${path}`, body, { headers: this.setHeader() })
    //         .catch(this.formatError)
    //         .map((res: Response) => res.json())
    // };

    // patch(path: string, body: Object = {}): Observable<any> {
    //     return this.http.patch(`${this.enviroment_api}${path}`, body, { headers: this.setHeader() })
    //         .catch(this.formatError)
    //         .map((res: Response) => res.json())
    // };

    // delete(path: string): Observable<any> {
    //     return this.http.delete(`${this.enviroment_api}${path}`, { headers: this.setHeader() })
    //         .catch(this.formatError)
    //         .map((res: Response) => res.json);
    // };

    // login(path: string, body: Object = {}): Observable<any> {
    //     return this.http.post(`${this.url_tannder_back}${path}`, body, { headers: this.setHeader() })
    //         .catch(this.formatError)
    //         .map((res: Response) => res.json());
    // };

    // getUser(path: string, id: string): Observable<any> {
    //     return this.http.get(`${this.url_tannder_back}${path}/${id}`, { headers: this.setHeader() })
    //         .catch(this.formatError)
    //         .map((res: Response) => res.json());
    // };

}
