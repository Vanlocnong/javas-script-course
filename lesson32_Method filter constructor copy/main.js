
//Creat array method



var course = [
    {
        name : 'python',
        coin : 300
    },
    {
        name : 'java',
        coin : 400

    },
    {
        name : 'ruby',
        coin : 500
    }
];

// var filterCourse   =  course.filter(function(ele , index , arr){
//     return ele.coin > 300;
// });

// console.log(filterCourse);


//filter2

Array.prototype.filter2 = function(cb){
    var output = [];
    for ( var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = cb(this[i],i,this);
            if(result) {
                output.push(this[i])
            }
            
        }
    }
    return output;
}


var filterCourse = course.filter2(function(element , index , array){
    return element.coin > 100;
})

console.log(filterCourse)

