function numStringrange(a,b,c)
{
    string = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    number = [1,2,3,4,5,6,7,8,9,10];
       var result = [];
       if(c == 0) 
       {
		return 'invalid bounds';
       }
       else if (typeof a === 'string')
       {
           for(var i = 0; i < string.length; i = i + c) 
           {
               result.push(string[i]);
               if(c > string.indexOf(b)) 
               {
               break;
               }
           }
           return result;
        }
    
          else if (typeof a === 'number')
       {
           for(var i = 0; i < number.length; i = i + c) 
           {
               result.push(number[i]);
               if(c > number.indexOf(b)) 
               {
               break;
               }
           }
       }
       return result;
    } 
   console.log(numStringrange('a', 'z', 2));
   console.log(numStringrange(1, 10, 2));