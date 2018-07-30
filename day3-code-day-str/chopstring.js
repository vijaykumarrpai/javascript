function string_chop(str,num)
{
    if (str == null) 
    {
    return [];
    }
    str = String(str);
    num = ~~num;
return num > 0 ? str.match(new RegExp('.{1,' + num + '}', 'g')) : [str];
}

console.log(string_chop('resource'));
console.log(string_chop('resource',2));
console.log(string_chop('dcresource',3));