import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilitarioService {

    constructor() { }

    delay(ms: number): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }


}