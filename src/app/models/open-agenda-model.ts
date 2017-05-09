import { FormModel } from '../interfaces/form-model';

import { Validators } from '@angular/forms';

export class OpenAgendaModel implements FormModel {

    private startDate: Date;
    private frequency: number;

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

    getModel() {
        return {
            startDate: [this.startDate, [
                Validators.required
            ]],
            frequency: [this.frequency, [
                Validators.required
            ]]
        };
    }

}
