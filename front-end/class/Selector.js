export default class Selector {
    constructor(tagSelector) {
        this.tagSelector = tagSelector;
        this.tot = 1;
    }

    totIncrement() {
        this.tot++;
    }
}
