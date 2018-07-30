function gimme(a){
    var sorted = [];
       a.forEach(function(value){
           sorted.push(value);
       });
       sorted.sort(function(a,b){
           return a-b;
       });
       var element = sorted[1];
       return a.indexOf(element);
   }

   console.log(gimme(2));
   console.log(gimme(10));