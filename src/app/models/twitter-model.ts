import { FormModel } from '../interfaces/form-model';

export class TwitterModel implements FormModel {
    private accountsIds: string;
    // private accountsIds: Array<string>;
    private hashtags: string;
    // private hashtags: Array<string>;

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

    // addToAccountsId(accountId: string): void {
    //     this.accountsIds.push(accountId);
    // }

    // addToHashtag(hashtag: string): void {
    //     this.hashtags.push(hashtag);
    // }

    // removeFromAccountIds(accountsId: string): void {
    //     const index = this.accountsIds.indexOf(accountsId);
    //     this.accountsIds.splice(
    //         index,
    //         index + 1
    //     );
    // }

    // removeFromHashTags(hashtag: string): void {
    //     const index = this.hashtags.indexOf(hashtag);
    //     this.hashtags.splice(
    //         index,
    //         index + 1
    //     );
    // }

    getModel() {
        return {
            accountsIds: this.accountsIds.toString(),
            hashtags: this.hashtags.toString(),
        };
    }
}
