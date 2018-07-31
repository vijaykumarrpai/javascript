let car = {
    model: 'X1',
    manufacturer: 'BMW',
    carState: false,
    xAxis: 0,

    start() {     
        this.carState = true;  
        return `The engine started`;
    },

    stop() {
        this.carState = false;
        return `The engine stopped`;
    },

    drive() {
        if(this.carState) {
            this.xAxis++;
            return `the car is moving`; 
        } else {
            return `start the car first`;
        }
    },

    currentPosition() {
        return `I'm at ${this.xAxis} position`;
    },

    reset() {
        this.xAxis = 0;
        this.carState = false;
        return `reset`;
    },
}

console.log(car.start());
console.log(car.stop());
console.log(car.drive());
console.log(car.start());
console.log(car.drive());
console.log(car.currentPosition());
console.log(car.drive());
console.log(car.currentPosition());
console.log(car.reset());
console.log(car.drive());