function findUnique(a){
    let uniqueNumber = [];
           
       let sortedArray = a.sort((a,b) => {
           return a - b;
       });
       
       if(a.length == '') {
           return null;
       } else {
       for(var i = 0; i < sortedArray.length; i++) {
           if(sortedArray[i] !== sortedArray[i+1] && sortedArray[i] !== sortedArray[i-1]) {
           uniqueNumber.push(sortedArray[i]);
               }
           }
       }
       return uniqueNumber[0];
   }

   console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]));