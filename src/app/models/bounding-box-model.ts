import { FormModel } from '../interfaces/form-model';

export class BoundingBoxModel implements FormModel {
    private minLat: string;
    private maxLat: string;
    private minLong: string;
    private maxLong: string;

    public getMinLat(): string {
        return this.minLat;
    }

    public setMinLat(minLat: string): void {
        this.minLat = minLat;
    }

    public getMaxLat(): string {
        return this.maxLat;
    }

    public setMaxLat(maxLat: string): void {
        this.maxLat = maxLat;
    }

    public getMinLong(): string {
        return this.minLong;
    }

    public setMinLong(minLong: string): void {
        this.minLong = minLong;
    }

    public getMaxLong(): string {
        return this.maxLong;
    }

    public setMaxLong(maxLong: string): void {
        this.maxLong = maxLong;
    }

    getModel() {
        return {
            minLat: this.minLat,
            maxLat: this.maxLat,
            minLong: this.minLong,
            maxLong: this.maxLong
        };
    }

}
