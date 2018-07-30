function repeat_string(str,num)
{
	if(num == undefined) {
	return 'Error in string or count.';
	}
	var result = '';
	for(var i = 0; i < num; i++)
	{
			result = result + str;
	}
		return result;
}

console.log(repeat_string('a',4));
console.log(repeat_string('a'));
console.log(repeat_string('vijay',8));