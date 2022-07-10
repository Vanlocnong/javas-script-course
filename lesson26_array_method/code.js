// myArray.forEach(function(element , index) {
//     console.log(element , index)
    
// })


// var isFree = myArray.some(function(course , index){
//     return course.name === 'PYTHON';
// })

// console.log(isFree)



// var search =  myArray.find(function(course , index ){
//     return course.coin === 0
// })


// console.log(search)


//array method

/**Cac phuong thuc forEach() , every() , some() , find() , filter()
 * function se goi lai va tra ra 3 tham so
 * element , index , originalArray*/ 

function print(i){
    console.log(i)
}

var courseList = [
    {
        name : 'Javascript',
        price : 0
    },
    {
        name : 'python',
        price : 200
    },
    {
        name : 'Java',
        price : 300
    },
    {
        name : 'PHP',
        price : 400
    },
    {
        name : 'python',
        price : 500
    }

];


//forEach 

//duyet qua tung phan tu cua mang

console.log('Method forEach()');

courseList.forEach(function (element , index) {
    console.log(element.name);
    console.log(index)
});


//every() tat ca cac phan tu cua mang thoa man dieu kien gi do

console.log('Method every()');

var checkPrice =  courseList.every( function (element , index){
    var result = element.price === 0;
    return result

});

console.log(checkPrice); //false

//some() chi can toi 1 phan tu thoa man dieu kien gi do

console.log('method some()');

var checkName = courseList.some(function(element , index,originalArray){
    console.log(element , index , originalArray)
    var result = element.price === 0 ;

    return result;

});
//print(i){
    //console.log(i)
//}
print(checkName) //true

//find() method dung de tim kiem . neu thay value can tim se dung luon . ket qua tra ve chi 1 phan tu

console.log('find()');


var checkElement = courseList.find(function(element , index , originalArray) {
    console.log(element , index , originalArray);
    let result = element.name === 'Javascript';
    return result
});

print(checkElement); //object //=>output  {name: 'Javascript', price: 0}


//fiter // giong nhu find() tuy nhien filter() se tra ve tat ca cac phan tu can tim


console.log('filter()');

var findElement = courseList.filter(function (element , index , originalArray) {
    console.log(element , index , originalArray)
})






















