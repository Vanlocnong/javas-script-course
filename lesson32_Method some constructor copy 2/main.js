
//Creat array method



var course = [
    {
        name : 'python',
        coin : 300,
        isFinish : false
    },
    {
        name : 'java',
        coin : 400,
        isFinish : true

    },
    {
        name : 'ruby',
        coin : 500,
        isFinish : false
        
    }
];

//some tối thiểu 1 phần tử trong arr thỏa mãn ok hay không


Array.prototype.some2 = function(cb){
    var output = false
    for ( var i in this) {
        if(this.hasOwnProperty(i)){
            var result = cb(this[i] , i , this);
            if(result){
                output = true;
                break;
            }
        }
    }
    return output;

}


var result = course.some2(function(ele , index , arr){
    return ele.isFinish === true;


})


console.log(result)




