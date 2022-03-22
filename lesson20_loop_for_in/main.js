//  LOOP

/**
 * 1.Vong lap for - lặp với điều kiện đúng
 * 2.for/in - lặp qua key của đối tượng
 * 3.for/ò - lặp qua value cảu đối tượng
 * 4.while - lặp khi điều kiện đúng
 * do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 * 
 */

//FOR IN

var myObject = {
    name: 'loc',
    age: 23,
    address: 'Lang Son Province'
}

for (var key in myObject) {
    //console.log(myObject[key])
}


var myArray = [
    'java',
    'php',
    'python',
    'ruby'
]

for (var idx in myArray) {
    //console.log(myArray[2])
}

var myString = 'NongVanLoc';

for (var pos in myString) {
    //console.log(myString[pos])
}




