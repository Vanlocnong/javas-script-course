

const courseProgramer = [
    {
        name : 'python',
        price : 0
    },
    {
        name : 'java',
        price : 100
    },
    {
        name : 'PHP',
        price : 200
    }
]

//constructor forEach()

console.log('myforEach()')

Array.prototype.myForEach = function(callback){
    var accumalator = [];
    var arrayLength = this.length;
    for( var i = 0 ; i < arrayLength ; i ++) {
        callback(this[i],i,this);
        accumalator.push(callback);
    }
    return accumalator
};

var checkvalue = courseProgramer.myForEach(function(element , index , originalArray){ 
    return console.log(element.name , index)
})

console.log(checkvalue)

//contructor myEvery()

console.log('constructor myEvery()')


var testValue = courseProgramer.myEvery(function(element , index , originalArray){

}) 


console.log(testValue)







