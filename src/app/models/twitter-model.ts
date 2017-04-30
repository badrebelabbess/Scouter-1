import { FormModel } from '../interfaces/form-model';

export class TwitterModel implements FormModel {
    private accountsIds: Array<string>;
    private hashtags: Array<string>;

    constructor(accountsIds?: Array<string>, hashtags?: Array<string>) {
       this.accountsIds = accountsIds;
       this.accountsIds = hashtags;
    }

    getAccountsIds(): Array<string> {
        return this.accountsIds;
    }

    getHashtags(): Array<string> {
        return this.hashtags;
    }

    addToAccountsId(accountId: string): void {
        this.accountsIds.push(accountId);
    }

    addToHashtag(hashtag: string): void {
        this.hashtags.push(hashtag);
    }

    removeFromAccountIds(accountsId: string): void {
        const index = this.accountsIds.indexOf(accountsId);
        this.accountsIds.splice(
            index,
            index + 1
        );
    }

    removeFromHashTags(hashtag: string): void {
        const index = this.hashtags.indexOf(hashtag);
        this.hashtags.splice(
            index,
            index + 1
        );
    }

    getModel() {
        return {
            accountsIds: this.accountsIds.toString(),
            hashtags: this.hashtags.toString(),
        };
    }
}
