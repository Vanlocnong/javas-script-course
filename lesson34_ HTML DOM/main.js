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
 */

// Documen Object



document.write('hello world');

//get element object

//get element by ID

var title =  document.getElementById('title');

console.log([title])

//get elements by classname 


var heading = document.getElementsByClassName('heading');


console.log(heading);

//get element by tag name

var content = document.getElementsByTagName('p');

console.log(content)

// get element by css selector


var heading2 = document.querySelector('.box .heading2');

console.log(heading2)

// HTML collection





