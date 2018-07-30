var names = ['ganesh', 'suresh', 'veeresh'];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);


for(var i = 0; i < names.length; i++) {
    console.log(`at ${i} index we found ${names[i]}`);
    console.log(names[i].toUpperCase());
}

console.log("I'm out of the loop");

var numbers = [10,20,30]; 
    var sum = 0;
    for(var i = 0; i < numbers.length; i++) {
        console.log(`index - ${i} | sum - ${sum} | n - ${numbers[i]}`);
        sum = sum + numbers[i];
        console.log(`index - ${i} | sum - ${sum} | n - ${numbers[i]}`);

    }
   console.log(sum);

   var numbers2 = [10,20,30,40,50,60];
   var sum2 = 0;
   for(var i = 0; i < numbers2.length; i=i+2) {
    console.log(`index - ${i} | sum - ${sum} | n - ${numbers[i]}`);
    sum2 = sum2 + numbers2[i];
    console.log(`index - ${i} | sum - ${sum} | n - ${numbers[i]}`);
   }
   console.log(sum2);

   var prices = [10,15,20,25,30,40];
   function add(sum) 
   {
   var sum = 0;
   var count = 0;
   for(var i = 0; i < prices.length; i++) {
       if((prices[i]) % 2 === 0)
       {
        sum = sum + prices[i];   
       }
       else {
           count ++;
       }
   }
   var array = [];
   array.push(sum,count);
   return array;  
}

console.log(add(sum));