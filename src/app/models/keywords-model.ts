import { FormModel } from '../interfaces/form-model';

export class KeywordsModel implements FormModel {

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
