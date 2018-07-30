var result = {
    source: 'Bangalore',
    destination: 'Mysore',
    distance: 150,
    time: '3 hours, 30 mins'
}

function distanceFormatter(result) {
return `The distance between ${result.source} and ${result.destination} is ${result.distance} kms and the time taken is ${result.time}`;
}

console.log(distanceFormatter(result));

var resultArr = {
    source: ['Bangalore'],
    destination: ['Mysore'],
    distance: 150,
    time: '3 hours, 30 mins'
}

function distanceFormatter1(resultArr) {
    return `The distance between ${resultArr.source[0]} and ${resultArr.destination[0]} is ${resultArr.distance} kms and the time taken is ${result.time}`;
}

console.log(distanceFormatter1(resultArr));

var resultArr = {
    source: ['Bangalore', 'Karnataka'],
    destination: ['Mysore', 'Karnataka'],
    distance: 150,
    time: '3 hours, 30 mins'
}

function distanceFormatter2(resultArr) {
    
}

console.log(distanceFormatter2(resultArr));