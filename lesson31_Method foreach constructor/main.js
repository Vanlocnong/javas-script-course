
//Creat array method

var list = [
    'a',
    'b',
    "c",
    "d"
];


//nguyên lý hoạt động của foreach , find , filter , some , every.

/**
 * 1. sẽ có 2 đối số truyền vào (callback() ,accumalator)
 * 2. không chạy qua empty elements , không care đến thuộc tính length
**/

// creat myForeach();

//object prototype
//for in

Array.prototype.forEach2 = function(cb) {
    for ( var i in this) {
        if (this.hasOwnProperty(i)) {
            cb(this[i], i , this);
        };
    };
};


list.forEach2(function(ele , index , arr){
    console.log(ele , index , arr);
});


//foreach() template







