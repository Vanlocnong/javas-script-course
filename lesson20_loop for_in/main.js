//  LOOP

/**
 * 1.Vong lap for - lặp với điều kiện đúng
 * 2.for/in - lặp qua key của đối tượng
 * 3.for/ò - lặp qua value cảu đối tượng
 * 4.while - lặp khi điều kiện đúng
 * do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 * 
 */

var myInfo = {
    name : 'Loc',
    age: 24,
    address: 'Lang Son'
}

for ( var key in myInfo) {
    console.log(key)
    console.log(myInfo[key])
}



