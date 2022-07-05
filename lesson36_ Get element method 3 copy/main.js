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

//first truy xuất tới node element:

var addAttribute = document.querySelector('h1');

// thêm 1 thuộc tính hợp lệ của thẻ h1

    addAttribute.title = 'this is greeting';
    
    addAttribute.style  = 'color : red'

// thêm 1 thuộc tính tùy biến của dev cho thẻ h1

    addAttribute.setAttribute('data','this is data');


// get ra các thuộc tính của thẻ h1

var getTitle = addAttribute.getAttribute('title'); //this is greeting //string

var getData = addAttribute.getAttribute('data');  //this is data //string






//ADVANCE NODE ATTRIBUTE































