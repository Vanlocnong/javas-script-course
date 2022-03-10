// KHAI BÁO BIẾN

// var fullName = "Nong Van Loc";

// var AGE = 26;

// alert(fullName)

// alert(AGE)


var a = 'goolge';
var b = 'facebook';
var c = 'instagram';


var check = (a && null || undefined || "" || 0 || false || undefined) && (b || null) && (c || null);

console.log(check)

if(check)
{
    alert('success')
} else{
    alert('fail')
}