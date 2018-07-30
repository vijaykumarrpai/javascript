function Vehicle(model, manufacturer, carState, xAxis) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.carState = carState;
    this.xAxis = 0;

    this.start = function() {
        this.carState = true;  
        return `The engine started`;
    };
    this.stop = function() {
        this.carState = false;
        return `The engine stopped`;
    };
    this.drive = function() {
        if(this.carState) {
            this.xAxis++;
            return `the car is moving`; 
        } else {
            return `start the car first`;
        }
    };
    this.currentPosition = function() {
        return `I'm at ${this.xAxis} position`;
    };  
    this.reset =  function() {
        this.xAxis = 0;
        this.carState = false;
        return `reset`;
    };
}

var v1 = new Vehicle('X1', 'BMW', false);
console.log(v1.start());
console.log(v1.stop());
console.log(v1.drive());
console.log(v1.currentPosition());
console.log(v1.start());
console.log(v1.drive());
console.log(v1.currentPosition());
console.log(v1.drive());
console.log(v1.currentPosition());
console.log(v1.reset());
console.log(v1.drive());
console.log(v1.currentPosition());