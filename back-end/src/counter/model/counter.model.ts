export interface ICounterModel {
    id_analytics: string;
    tag_selector: string;
    quantity: number;
}

export class CounterModel implements ICounterModel {
    id_analytics: string;
    tag_selector: string;
    quantity: number;
    constructor(uuid: string, tag_selector: string, quantity: number) {
        this.id_analytics = uuid;
        this.tag_selector = tag_selector;
        this.quantity = quantity;
    }
}
