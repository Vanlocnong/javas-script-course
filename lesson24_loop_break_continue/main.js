//break and continue



// for ( var i = 0 ; i < 10 ; i++) {
//     console.log(i)

//     if ( i === 5) {
//         console.log(i)
//         console.log('break');
//         break;
//     }
// }


//continue


for (var i = 0 ;i<10 ;i++) {
    if(i%2 !== 0) {
        continue;
    }
    
    console.log(i)
}