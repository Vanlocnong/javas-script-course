//Object Prototype

// la 1 nguyen mau cua object
// 

function user(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.getAge = function(){
        return age;
    }
}


var male = new user('Loc','24','male');
var female = new user('Ngoc', '23', 'female');

male.height = '1m75';
console.log(male.height); //undefine;

user.prototype.status = 'single';
user.prototype.getStatus = function() {
    return this.status;
}

console.log(male);
console.log(female);

