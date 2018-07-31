var source = 'bangalore';
var destination = 'mysore';
var distance = 150;
var timeTaken = '3 hours 30 mins';
var computeTime = function(speed) {
    return distance / speed;
}

console.log('The distance from ' + source + ' to ' + destination + ' is ' + distance + ' and the time taken is ' + timeTaken);

console.log(`The distance from ${source} to ${destination} is ${distance} and the time taken is ${timeTaken}`);

console.log(`The time taken at a speed of 100 is ${computeTime(100)} hrs`);