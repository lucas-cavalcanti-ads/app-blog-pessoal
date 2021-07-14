import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilitarioService {

    constructor() { }

    delay(): Promise<boolean> {
        const MILLISECONDS_IN_DELAY = 1000;
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, MILLISECONDS_IN_DELAY);
        });
    }
}