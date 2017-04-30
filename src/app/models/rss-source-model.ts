import { FormModel } from '../interfaces/form-model';

export class RssSourceModel implements FormModel {

    private source: string;
    private name: string;

    constructor(source: string, name: string) {
        this.source = source;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getSource() {
        return this.source;
    }

    setName(name: string) {
        this.name = name;
    }

    setSource(source: string) {
        this.source = source;
    }

    getModel(): any {
        return {
            source: this.source,
            name: this.name
        };
    }

}