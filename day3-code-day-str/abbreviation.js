function abbrev_name(name)
{   
    var splitName = name.split(' ');
    var result = `${splitName[0]} ${splitName[1].charAt(0)}.`;
    return result;
}

console.log(abbrev_name('Robin Singh'));
console.log(abbrev_name('Vijaykumar Pai'));
