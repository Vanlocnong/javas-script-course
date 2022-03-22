//  LOOP

/**
 * 1.Vong lap for - lặp với điều kiện đúng
 * 2.for/in - lặp qua key của đối tượng
 * 3.for/ò - lặp qua value cảu đối tượng
 * 4.while - lặp khi điều kiện đúng
 * do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 * 
 */

//FOR 

//WITH STRING

var myString = 'NONGVANLOC';

for (var value of myString) {
    //console.log(value)
}

//WITH ARRAY

var myArray = ['PHP','JS','JAVA','PYTHON'];

for (var valueArray of myArray) {
    //console.log(valueArray)
}

var myObject = {
    name: 'loc',
    age: '23'
}

//WITH OBJECT

for (valueObject of Object.keys(myObject))
{
    console.log(valueObject)
}

for (valueObject of Object.values(myObject))
{
    console.log(valueObject)
}
