import { FormModel } from '../interfaces/form-model';

import { Validators } from '@angular/forms';

export class EventModel implements FormModel {

    private frequency: number;

    constructor() {
        this.frequency = 0.0;
    }

    getFrequency() {
        return this.frequency;
    }

    setFrequency(frequency: number) {
        this.frequency = frequency;
    }

    getModel(): any {
        return {
            frequency: [this.frequency, [
                Validators.required
            ]]
        };
    }

}
