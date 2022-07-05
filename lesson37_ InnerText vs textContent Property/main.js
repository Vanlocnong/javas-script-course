//Document object model

//mô hình DOM

//DOM có 3 thành phần 
/**
 * 1.Element(tag) : ID  , class , 
 * tag ,css selector , 
 * html  collection
 * 2.Attribute
 * 3.Text
 */

/**
 * getElementById
 * getElementsByClassName
 * getElementsByTagName
 * querrySelector
 * querrySelectorAll
 * HTML collection
 * document.write
 */


//innerText 

//chỉ lấy được những text xuất hiện trên màn hình


//textContent

//lấy toàn bộ kể cả dấu enter và space

//first truy xuất tới node element:

var accessElement = document.querySelector('h1');

//get ra innerText và textContent

// console.log(accessElement.innerText);

// console.log(accessElement.textContent);

// set gia tri moi qua method innerText va textContent:

accessElement.innerText = `

1

`;

// console.log(accessElement.innerText);

console.log(accessElement.textContent);








































