import { FormModel } from '../interfaces/form-model';

export class EventModel implements FormModel {

    private frequency: number;

    getFrequency() {
        return this.frequency;
    }

    setFrequency(frequency: number) {
        this.frequency = frequency;
    }

    getModel(): any {
        return {
            frequency: this.frequency
        };
    }

}
