var myArray = [
    
    {
        name: 'JAVA',
        coin: 100
    },
    {
        name: 'PYTHON',
        coin: 100
    },

    {
        name: 'SWIFT',
        coin: 100
    }
]

//vd khong dung initialValue


var numbers =  [100,200,300,400,500];

var totalCoin = numbers.reduce(function(acc,curr){
    return acc + curr;
}, 0)

console.log(totalCoin)

//Flat "lam phang" mang tu mang depth


var array = [1,2,[3,4],5,6,[7,8,9]];

var newArray = array.reduce(function(flatOutput , arrayItem){
    return flatOutput.concat(arrayItem);
},[]);

console.log(newArray) //output = [1,2,3,4,5,6,7,8,9]


//vd 2

var topics = [
    {
        topic : 'front-end',
        courses :[
            {
                id : 1,
                title: 'HTML , CSS'
            },
            {
                id: 2,
                title: 'javascript'
            }
        ]
    },

    {
        topic: 'back-end',
        courses: [
            {
                id : 1,
                course: 'PHP'
            },
            {
                id: 2,
                course : 'Node-js'
            }
        ]
    }
]



var newCourse = topics.reduce(function(course , curr){
    return course.concat(curr.courses)
},[]);

console.log(newCourse)