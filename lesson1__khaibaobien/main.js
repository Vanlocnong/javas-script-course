// KHAI BÁO BIẾN

// var fullName = "Nong Van Loc";

// var AGE = 26;

// alert(fullName)

// alert(AGE)

var a = 'a' && 'b' && 'c';

console.log(a)

console.log(Boolean(a))


var b = '' || 0 || null;

console.log(b)

console.log(Boolean(b))


var c = ('a' && 'b') || ('' && '1');

console.log('c is:',c);
console.log(typeof c);
console.log(Boolean (c))

if(b){
    console.log('dkien dung')

} else{
    console.log('dkien sai')     
}



var fb = 'facebook';

var gg = 'google';



var isSuccess = (gg || undefined) && (fb || undefined);
var isSuccess2 = (null || undefined);

console.log('success is:',isSuccess)
console.log(typeof isSuccess2);
console.log('sucsess2is:',isSuccess2);
console.log(Boolean(isSuccess2))


if(isSuccess){
    console.log('dkien dung')

} else{
    console.log('dkien sai')
}



var a = 'Nong Van Loc'

var c = a;

var d = c.split(',');

console.log(d);

console.log(typeof d)

var Array = ['nong','van','loc'];

console.log(typeof Array);

console.log(a.replace('Nong','Nguyen'));


var check = (null || undefined) || ('loc' || null);

console.log(check);

console.log(Boolean(check))