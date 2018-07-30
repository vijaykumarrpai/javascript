var currentInventory = [ 
    {name: "HTC", stock: 25},
    {name: "Nokia", stock: 1000}, 
    {name: "Samsung", stock: 50},
    {name: "Sony", stock: 10}, 
    {name: "Apple", stock: 15}
];

var newInventory = [ 
    {name: "LG", stock: 5}, 
    {name: "Sony", stock: 10}, 
    {name: "Samsung", stock: 5},
    {name: "Apple", stock: 15}
];

function updateInventory(currentInventory, newInventory) {
    newInventory.forEach(function(newInventoryItem) {
        var inventoryItem = currentInventory.find(function(currentInventoryItem){
            return currentInventoryItem.name === newInventoryItem.name;
        });
        if(inventoryItem === undefined) {
            currentInventory.push(newInventoryItem);
        } else {
            inventoryItem.stock += newInventoryItem.stock;
        }
    });
    return currentInventory;
}

console.log(updateInventory(currentInventory,newInventory));