
//Object contrucstor

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

male.firstName = 'Nong';
female.firstName = 'Nguyen';
user.prototype.email = '...@gmail.com';


console.log(male);
console.log(female);

