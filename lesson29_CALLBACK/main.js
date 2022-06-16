



var course = [
    'JS',
    'PYTHON',
    'JAVA'
];

Array.prototype.map2 = function(callback){
    var acc = [];
    var arrayLength = this.length;
    for ( var i = 0 ; i < arrayLength ; i++){
    var callbackFunction = callback(this[i],i);
    acc.push(callbackFunction);
    }

}



course.map2(function(course , index){
    console.log(index , course);

});

