// ap dung reduce
Array.prototype.reduce2 = function(callback , result) {
    let i = 0 
    if (arguments.length < 2){
        i = 1
        result = this[0]
    }
        
    for ( ; i < this.length ; i++){
        result = callback(result , this[i], i , this)
    }
    return result
}



const number = [1,2,3,4,5];


var total = number.reduce2(function(total , curr){
    return total + curr;
},10);


// console.log(total)



// thuc hanh reduce
// function arrToObj(arr){
//     return arr.reduce((total,curent)=>{
//       let [name,value] = curent;
//       total[name] = value;
//     return total;
//   },{})
// }

// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

function arrToObj(arr){
    return arr.reduce((obj, curr)=>{
        let [name,value] = curr;
        obj[name] = value;
        return obj
    },{})
}

// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

