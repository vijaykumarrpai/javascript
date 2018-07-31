var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

var newInventory = [ {name: "LG", stock: 5}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5}, {name: "Apple", stock: 15}];


function updateInventory(a,b){
    b.forEach(newInventoryItem => {
    let inventoryItem = a.find(currentInventoryItem =>{
            return currentInventoryItem.name === newInventoryItem.name;
            });
        if(inventoryItem === undefined) {
                    a.push(newInventoryItem);
        } else {
                    inventoryItem.stock += newInventoryItem.stock;		
        }
    });
       return a;
   }

   console.log(updateInventory(currentInventory, newInventory));