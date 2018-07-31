function colorAssociation(a){
    let array = [];
       a.forEach(element => {
           let obj = {};
           obj[element[0]] = element[1];
           array.push(obj);
       });
       return array;
   }

   console.log(colorAssociation([["white", "goodness"], ["blue", "tranquility"]]));