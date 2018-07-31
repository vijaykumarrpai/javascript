class Counter {
    constructor(value = 0) {
        this.value = value;
    }
    up() {
        this.value += 1;
        return this.value;
    }
    down() {
        (this.value === 0) ? this.value = 0 : this.value--; 
        return this.value;
    }
    reset() {
        this.value = 0;
        return this.value;
    }
}

module.exports = {
    Counter
}