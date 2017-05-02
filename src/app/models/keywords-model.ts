import { FormModel } from '../interfaces/form-model';

export class KeywordsModel {

    private keywords: string;

    getKeywords(): string {
        return this.keywords;
    }

    setKeywords(keywords: string) {
        this.keywords = keywords;
    }

}
