import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonsService {

    constructor() { }


    validateInput(input, submitted) {
        return (input.invalid && (input.dirty || input.touched || submitted));
    }

}
