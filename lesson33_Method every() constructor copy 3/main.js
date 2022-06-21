
//Creat array method



var course = [
    {
        name : 'python',
        coin : 100,
        isFinish : true
    },
    {
        name : 'java',
        coin : 400,
        isFinish : true

    },
    {
        name : 'ruby',
        coin : 500,
        isFinish :false
        
    }
];

// tat ca element phai thoa man dieu kien true , neu 1 ele false se dung luon loop va tra ra false


Array.prototype.every2 = function(cb){
    var output = true;
    
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = cb(this[i], i , this) 
                if(!result) {
                    output = false;
                    break;
                };
            
        };
    };
    return output;
};

var result = course.every2(function(ele , index , arr){
    return ele.isFinish;
});

console.log(result)