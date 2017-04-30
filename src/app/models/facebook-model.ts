import { FormModel } from '../interfaces/form-model';

export class FacebookModel implements FormModel {

    private pagesIds: Array<string>;
    private pagesNames: Array<string>;
    private pagesFrequency: number;
    private eventsfrequency: number;

    getPagesIds(): Array<string> {
        return this.pagesIds;
    }

    getPagesNames(): Array<string> {
        return this.pagesNames;
    }

    addToPagesIds(pagesIds: string): void {
        this.pagesIds.push(pagesIds);
    }

    addToPagesNames(pagesNames: string): void {
        this.pagesNames.push(pagesNames);
    }

    removeFromAccountIds(pageId: string): void {
        const index = this.pagesIds.indexOf(pageId);
        this.pagesIds.splice(
            index,
            index + 1
        );
    }

    removeFromPagesNames(pageName: string): void {
        const index = this.pagesNames.indexOf(pageName);
        this.pagesNames.splice(
            index,
            index + 1
        );
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
            pagesIds: this.pagesIds.toString(),
            pagesNames: this.pagesNames.toString(),
            pagesFrequency: this.pagesFrequency.toString(),
            eventsfrequency: this.eventsfrequency.toString()
        };
    }

}
