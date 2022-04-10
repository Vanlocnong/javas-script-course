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
        coin: 0
    },
    {
        name: 'PYTHON',
        coin: 0
    },
    {
        name: 'PYTHON',
        coin: 0
    },

    {
        name: 'SWIFT',
        coin: 1
    }

]

//Foreach()


// myArray.forEach(function(course , index){
//     console.log(index , course)
// })

//tra ra 2 tham so course(phan tu cuar mang) , index(index cua tung phan tu)

//Every

// var isFree = myArray.every(function(course , index){
//     return course.coin === 0
// })

// console.log(isFree)

//kiem tra tat ca cac phan tu trong mang thoa man 1 dieu kien nao do
    
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

