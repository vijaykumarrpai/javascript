// variables declared using var in javaScript is function scoped
// variables declared using let in javaScript is block scoped 

let players = ['sachin','dhoni','virat'];
function listPlayers() {
    for(var i = 0; i < players.length; i++) {
        console.log(players[i]);
    }
    console.log(i); // 3
}
listPlayers();
//console.log(i); // ReferenceError: i is not defined (not available outside the function)

function displayPlayers() {
    for(let j = 0; j < players.length; j++) {
        console.log(players[j]);
    }
    // console.log(j); ReferenceError: j is not defined (not available outside the block of code)
}
displayPlayers();

(function(){
    var n1 = 10;
    if(n1 === 10) {
        var inString = 'ten';
    }
    console.log(n1); // 10
    console.log(inString); // 'ten';
})();

(function(){
    let a1 = 20;
    if(a1 === 20) {
        let inStr = 'twenty';
        console.log(inStr);
    }
    console.log(a1);
    //console.log(inStr); // referenceError : inStr is not defined
})();