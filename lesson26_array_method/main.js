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

//Foreach()


// myArray.forEach(function(course , index){
//     console.log(index , course)
// })

//trả ra 2 tham số course(phần tử của mảng) , index(index của từng phần tử)

//Every

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


function coinHandle () {

}

totalCoin = myArray.reduce(coinHandle , 0); 


