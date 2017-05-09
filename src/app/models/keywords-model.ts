import { FormModel } from '../interfaces/form-model';

import { Validators } from '@angular/forms';

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
