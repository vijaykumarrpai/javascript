var data = [
    [ 'animals',
      [
        'dogs', ['Corgi', 'Sheltie'],
        'cats', ['Tabby','Black'],
        'pigs', ['Teacup']
      ]
    ],
    [ 'guitars',
      [
        'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
        'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
      ]
    ]
  ];

function objectifier(a) {
    let myObject = {};
    for(let i = 0; i < a.length; i++) {
        let result = a[i][0];
        myObject[result] = {};
        let values = a[i][1];
        for(let j = 0; j < values.length; j++) {
            if(j % 2 === 0) {
                myObject[result][values[j]] = values[j+1];
            }
        }
    }
    return myObject;
}

console.log(objectifier(data));