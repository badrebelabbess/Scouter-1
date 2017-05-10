import { FormModel } from '../interfaces/form-model';

import { Validators } from '@angular/forms';

export class DBPediaModel implements FormModel {
    private frequency: number;
    private startDate: Date;
    private query: string;

    constructor(frequency?: number, startDate?: string, query?: string) {
        this.frequency = frequency || 0.0;
        if ( startDate != null ) {
            this.startDate = new Date(startDate);
        } else {
            this.startDate = new Date();
        }
        this.query = query ||
        `select * where {
    ?s ?p ?o .
} limit 10
        `;
    }

    getFrequency() {
        return this.frequency;
    }

    setFrequency(frequency: number) {
        this.frequency = frequency;
    }

    getStartDate() {
        return this.startDate;
    }

    setStartDate(startDate: Date) {
        this.startDate = startDate;
    }

    getQuery() {
        return this.query;
    }

    setQuery(query: string) {
        this.query = query;
    }

    getModel() {
        return {
            frequency: [this.frequency, [
                Validators.required
            ]],
            startDate: [this.startDate, [
                Validators.required
            ]],
            query: [this.query, [
                Validators.required
            ]]
        };
    }

}
