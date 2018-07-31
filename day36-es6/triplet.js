function gimme(a){
    let sorted = [];
       a.forEach(value => {
       sorted.push(value);
       });
       sorted.sort((a,b) => {
           return a-b;
       });
       var element = sorted[1];
       return a.indexOf(element);
   }

   console.log(gimme([2,3,1]));
   console.log(gimme([5, 10, 14]));