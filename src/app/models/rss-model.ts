import { RssSourceModel } from './rss-source-model';

import { FormModel } from '../interfaces/form-model';

export class RssModel implements FormModel {

    private frequency: number;
    private sources: string;
    // private sources: Array<RssSourceModel>;

    getFrequency() {
        return this.frequency;
    }

    setFrequency(frequency: number) {
        this.frequency = frequency;
    }

    // addToSources(source: RssSourceModel): void {
    //     this.sources.push(source);
    // }

    // removeFromSources(source: RssSourceModel): void {
    // }

    getModel(): any {
        return {
            frequency: this.frequency,
            sources: this.sources
            // sources: this.sources.forEach(element => {
            //     element.getModel();
            // })
        };
    }
}
