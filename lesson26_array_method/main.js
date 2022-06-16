//ARRAY METHOD P2

/**
 * forEach()
 * evrery()
 * some()
 * find()
 * filter()
 */


var myArray = [
    
    {
        name: 'JAVA',
        coin: 1

    },
    {
        name: 'PYTHON',
        coin: 1
    },
    {
        name: 'PYTHON',
        coin: 1
    },
    {
        name: 'PYTHON',
        coin: 1
    },

    {
        name: 'SWIFT',
        coin: 0
    }

]


var myList = [
    'a',
    'b',
    'c',
    'd'
]

//Foreach()


// myArray.forEach(function(course , index){
//     console.log(index , course)
// })

//trả ra 2 tham số course(phần tử của mảng) , index(index của từng phần tử)

Array.prototype.myForeach = function(callback){
    var acc = [];
    var arrLength = this.length;
    for (var i = 0 ; i < arrLength ; i++){
        callback(this[i],i);
        acc.push(callback);
    }
    return acc

}

console.log(myList.myForeach(function(items , index){
    console.log(items,index);
}));


console.log('NEXT METHOD')

//Every
var numberArray = [
    1,
    2,
    3,
    4
];

Array.prototype.myEvery = function(callback){
    var acc = [];
    var arrayLength = this.length;
    for(var i = 0 ; i < arrayLength ; i++){
        callback(this[i],i);
        acc.push(callback);
        
    };
    return acc;
};


console.log(numberArray.myEvery(function(items,index){
    console.log(items,index)
}));

// var isFree = myArray.every(function(course , index){
//     return course.coin === 0
// })

// console.log(isFree)

//kiểm tra tất cả các phần tử trong mảng thỏa mãn 1 điều kiện nào đó
    
//Some

// chỉ cần 1 trong các phần tử của mảng thỏa mãn đk => true



// var isFree = myArray.some(function(course,index){
//     return course.coin === 0
// })

// console.log(isFree)


//FIND()

// isFree = myArray.find(function(course,index){

    
//     return course.coin === 0
// })

// console.log(isFree)

//FILTER 

// list = myArray.filter(function(course,index){
//     return course.name === 'PYTHON'
// })

// console.log(list)

// MAP

// function handle(course , index){
//     return {
//         id : 1,
//         name: `Course: ${course.name}`,
//         coin : course.coin,
//         level : 'Hard',
//     }
// }

// var newArray = myArray.map(handle)

// console.log(newArray)


//REDUCE


// function coinHandle () {

// }

// totalCoin = myArray.reduce(coinHandle , 0); 


// function calculateRating(watchList){
//     var films = watchList.filter(function(list){
//       return list.Director === 'Christopher Nolan';
//     })
//     var total = films.reduce(function(a,b){
//       return a + Number(b.imdbRating);
//     }, 0)
//     return total/films.length;
//   }

//   console.log(films)