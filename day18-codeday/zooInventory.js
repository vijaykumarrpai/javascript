var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

  function zooInventory(myZoo) {
      var animal = [];
	myZoo.forEach(function(value){
        animal.push(value[0] + " the " + value[1][0] + " is " + value[1][1]);
    });
    return animal;
    }

console.log(zooInventory(myZoo));