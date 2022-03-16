
//Object contrucstor

function user(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.getAge = function(){
        return age;
    }
}

user.email = '...@gmail.com'

var male = new user('Loc','24','male');
var female = new user('Ngoc', '23', 'female');

male.firstName = 'Nong';
female.firstName = 'Nguyen';
male.email = '...@gmail.com'


console.log(male.email);
console.log(female);

