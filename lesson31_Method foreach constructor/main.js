
//Creat array method

var list = [
    'a',
    'b',
    'c',
    'd'
]


//nguyên lý hoạt động của foreach , find , filter , some , every.

/**
 * 1. sẽ có 2 đối số truyền vào (callback() ,accumalator)
 * 2. không chạy qua empty elements , không care đến thuộc tính length
**/

// creat myForeach();
//foreach() template

var output =  list.forEach(function(items , index , arr){
    console.log(items , index , arr)
});

console.log(output)
