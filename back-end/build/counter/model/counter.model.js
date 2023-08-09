export class CounterModel {
    id_analytics;
    tag_selector;
    quantity;
    constructor(uuid, tag_selector, quantity) {
        this.id_analytics = uuid;
        this.tag_selector = tag_selector;
        this.quantity = quantity;
    }
}
