var car = {
    model: 'X1',
    manufacturer: 'BMW',
    carState: false,
    xAxis: 0,

    start: function() {     
        this.carState = true;  
        return `The engine started`;
    },

    stop: function() {
        this.carState = false;
        return `The engine stopped`;
    },

    drive: function() {
        if(this.carState) {
            this.xAxis++;
            return `the car is moving`; 
        } else {
            return `start the car first`;
        }
    },

    currentPosition: function() {
        return `I'm at ${this.xAxis} position`;
    },

    reset: function() {
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