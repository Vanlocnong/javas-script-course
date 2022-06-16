//FUNCTION



function show() {
    var myString= '';
    for (var param of arguments) {
        myString += `${param} -`
    }
    console.log(myString);
}


// show('log1','log2','log3');



function writeLog(text,text2) {
    if(text) {
        //console.log('OK')
    }
    else{
        //console.log('NG')
    }
    //console.log(text2);
}

writeLog(null,'text')



function write() {
    var newString = '';
    for (var number of arguments) {
        newString += number;
        
        
    }
    console.log(newString)
}

write(1,2,3,4,5,6,7);



function write2() {
    console.log(arguments)
    
}

//write2('log1','log2','log3')