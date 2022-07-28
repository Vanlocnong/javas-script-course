//ARRAY METHOD P2

/**
Reduce
 */


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

 var totalCoin = 0; //B Biến lưu trữ



 //lặp qua các phần tử 

for (var i of myArray) {
    
    //thực hiện việc lưu trữ
    totalCoin = totalCoin + i.coin;
} 

// console.log(totalCoin)


//REDUCE có 2 tham số (1 function,initial value)

//biến lưu trữ 
//thực hiện việc lưu trữ    

var i = 0;
 
function coinHandle(accumulator , currentValue , currentIndex , originalArray){
    // i++;
    

    /**
     * accumulator : bien luu tru
     * currentValue: gia tri hien tai
     * currenIndex: chi muc hien tai
     * originalArray: array goc
     */

    var coinAll = accumulator + currentValue.coin;
    console.table({
        'luot chay' : i,
        'bien tich tru' : accumulator,
        'gia khoa hoc': currentValue,
        'tich tru duoc' : coinAll 
    });
    
    return coinAll;
}

var total = myArray.reduce(coinHandle , 0);

console.log('tong so coin trong array : ' + total);


var sport = [
    {
        name : 'boi loi',
        gold : 11   
    },
    {
        name: 'boxing',
        gold : 3
    },
    {
        name: 'dap xe',
        gold : 4
    },
    {
        name : 'dau kiem',
        gold: 5
    }
]


function getTotalGold(arr){
    return arr.reduce(function(acc , curr,currindex , original){
        return acc + curr.gold; 
    } ,0)

    
}





console.log(getTotalGold(sport))







