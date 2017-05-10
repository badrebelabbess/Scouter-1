import { FormModel } from '../interfaces/form-model';

import { Validators } from '@angular/forms';

export class TwitterModel implements FormModel {
    private accountsIds: string;
    private hashtags: string;

    constructor() {
       this.accountsIds = '';
       this.hashtags = '';
    }

    getAccountsIds(): string {
        return this.accountsIds;
    }

    getHashtags(): string {
        return this.hashtags;
    }

    setAccountsIds(accountsIds: string) {
        this.accountsIds = accountsIds;
    }

    setHashtags(hashtags: string) {
        this.hashtags = hashtags;
    }

    getModel() {
        return {
            accountsIds: [
                this.accountsIds,
                [
                    Validators.required,
                    Validators.pattern(new RegExp('[0-9]+[^;]\s*,*\s*', 'g'))
                ]
            ],
            hashtags: [
                this.hashtags,
                [
                    Validators.required,
                    Validators.pattern(new RegExp('[a-zA-Z]+[^;]\s*,*\s*', 'g'))
                ]
            ]
        };
    }
}
