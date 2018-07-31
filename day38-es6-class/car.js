class Car {
    constructor(name, make, color, brand, fuelType, seater, xAxis = 0) {
        this.name = name;
        this.make = make;
        this.color = color;
        this.brand = brand;
        this.fuelType = fuelType;
        this.seater = seater;
        this.xAxis = xAxis;
    }
    details() {
        return `NAME - ${this.name.toUpperCase()} :: MAKE - ${this.make} :: COLOR - ${this.color} :: BRAND - ${this.brand} :: FUELTYPE - ${this.fuelType} :: SEATER - ${this.seater}`;
    }

    reset() {
        this.xAxis = 0;
    }
    
    getPosition() {
        return `${this.name} is at ${this.xAxis} position`;
    }

    move() {
        this.xAxis += 1;
        return this.xAxis;
    }

    reverse() {
        this.xAxis -= 1;
        return this.xAxis;
    }
}

module.exports = {
    Car
}