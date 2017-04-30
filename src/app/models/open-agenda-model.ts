import { FormModel } from '../interfaces/form-model';

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
            startDate: this.startDate,
            frequency: this.frequency
        }
    }

}
