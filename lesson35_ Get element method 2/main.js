//Document object model

//mô hình DOM

//DOM có 3 thành phần 
/**
 * 1.Element(tag) : ID  , class , 
 * tag ,css selector , 
 * html  collection
 * 2.Attribute
 * 3.Text
 * 
 * 
 */


var boxNode = document.querySelector('.boxOne');

var boxNodeSecond = document.querySelector('.boxTwo')

//...


var item = boxNode.querySelectorAll('li');
var itemSecond = boxNodeSecond.querySelectorAll('li')
//...

console.log(item[0]);
console.log(itemSecond[1]);



















