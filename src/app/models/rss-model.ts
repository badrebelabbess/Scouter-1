import { RssSourceModel } from './rss-source-model';

import { FormModel } from '../interfaces/form-model';

import { Validators } from '@angular/forms';

export class RssModel implements FormModel {

    private frequency: number;
    private sources: string;

    constructor() {
        this.frequency = 0;
        this.sources = `sourceName1:http://example.com/rss1,
sourceName2:http://example.com/rss2
 `;
    }

    getFrequency() {
        return this.frequency;
    }

    setFrequency(frequency: number) {
        this.frequency = frequency;
    }

    getModel(): any {
        return {
            frequency: [
                this.frequency,
                [
                    Validators.required
                ]
            ],
            sources: [
                this.sources,
                [
                    Validators.required,
                    // Validators.pattern(new RegExp('^([a-zA-Z]+:\s*(http:\/\/.*),*)$', 'igm'))
                    Validators.pattern(new RegExp('^([a-zA-Z0-9]+:\s*(http:\/\/.*))[\n|,]+$', 'igm'))
                ]
            ]
        };
    }
}
