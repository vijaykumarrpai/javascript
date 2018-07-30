function search_word(str, num){
    
    var x = 0, y=0;
   
    for (i=0;i< str.length;i++)
        {
        if(str[i] == num[0])
            {
            for(j=i;j< i+num.length;j++)
               {
                if(str[j]==num[j-i])
                  {
                    y++;
                  }
                if (y==num.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+num+"' was found "+x+" times.";
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));