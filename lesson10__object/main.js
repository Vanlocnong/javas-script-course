
var stt = 'stt';

var myInfo = {
    name : 'loc',
    age : 18,
    address : 'Lang Son',
    skill : ['php','python','javascript'],
    [stt] : 'Single',
    getName : function() {
        return this.name;
    }
};

//TAO RA 1 PHUONG THUC getname
//TAO RA 1 THUOC TINH age

// Them 1 key & value vao 1 object da tao san
myInfo.gender = 'Male';
myInfo['-gender-'] = '1';



// them 1 cap key-value vao ob tu 1 var



var oldSkill = 'skill';

// 1 key k ton tai trong object se return undefine

//lay value tu key

// console.log(myInfo.skill);  //cach 1
// console.log(myInfo[oldSkill]);  // cach 2

// xoa key

delete myInfo.name;

//FUNCTION => PHUONG THUC 
//OTTHER => THUOC TINH

