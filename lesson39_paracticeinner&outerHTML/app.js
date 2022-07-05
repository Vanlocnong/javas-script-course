

var coursesList = [
    'PHP',
    'JAVA',
    'PYTHON',
    'JAVASCRIPT'
];

var mapValue = coursesList.map( function(value , index , arr){
    return value
});

var resultFinal = mapValue.join(' ');

console.log(resultFinal);



