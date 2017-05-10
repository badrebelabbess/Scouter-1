import { FormModel } from '../interfaces/form-model';

import { Validators } from '@angular/forms';

export class FacebookModel implements FormModel {

    private pagesIds: string;
    private pagesNames: string;
    private pagesFrequency: number;
    private eventsfrequency: number;

    constructor() {
        this.pagesIds = '';
        this.pagesNames = '';
        this.eventsfrequency = 0.0;
        this.pagesFrequency = 0.0;
    }

    getPagesIds() {
        return this.pagesIds;
    }

    setPagesIds(pagesIds: string) {
        this.pagesIds = pagesIds;
    }

    getPagesNames() {
        return this.pagesNames;
    }

    setPagesNames(pagesNames: string) {
        this.pagesNames = pagesNames;
    }

    getPagesFrequency() {
        return this.pagesFrequency;
    }

    setPagesFrequency(frequency: number) {
        this.pagesFrequency = frequency;
    }

    getEventsFrequency() {
        return this.pagesFrequency;
    }

    setEventsFrequency(frequency: number) {
        this.pagesFrequency = frequency;
    }

    getModel() {
        return {
            pagesIds: [
                this.pagesIds,
                [
                    Validators.required,
                    Validators.pattern(new RegExp('[0-9]+[^;]\s*,*\s*', 'g'))
                ]
            ],
            pagesNames: [
                this.pagesNames,
                [
                    Validators.required,
                    Validators.pattern(new RegExp('[a-zA-Z]+[^;]\s*,*\s*', 'g'))
                ]
            ],
            pagesFrequency: [
                this.pagesFrequency,
                [
                    Validators.required
                ]
            ],
            eventsfrequency: [
                this.eventsfrequency,
                [
                    Validators.required
                ]
            ]
        };
    }

}
