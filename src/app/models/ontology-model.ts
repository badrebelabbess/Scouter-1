import { FormModel } from '../interfaces/form-model';

export class OntologyModel implements FormModel {

    private keywords: string;

    getKeywords(): string {
        return this.keywords;
    }

    setKeywords(keywords: string) {
        this.keywords = keywords;
    }

    getModel(): any {
        return {
            keywords: this.keywords
        };
    }

}
