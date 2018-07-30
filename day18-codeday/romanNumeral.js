function roman(num) {
    //array of decimals to be converted to roman numerals
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    var romanNum = '';
    
    for (var i = 0; i < decimal.length; i++){
      while(decimal[i] <= num){
        romanNum += roman[i];
        num -= decimal[i];
      }
    }
    return romanNum;
  }

console.log(roman(1000));
console.log(roman(900));
console.log(roman(1666));
console.log(roman(2008));
console.log(roman(1990));
