
//truy cap vao box element 

var accessElement = document.querySelector('.box');

//them vao element h1 voi text node la heading : innerHTML

accessElement.innerHTML = '<h1>heading</h1>';

//get ra voi thuoc tinh inner

console.log(accessElement.innerHTML); // '<h1>heading</h1>'

// them 1 element h2 voi text node hello world : outerHTML

accessElement.outerHTML = '<h2>hello world</h2>';
//get ra voi thuoc tinh outer

console.log(accessElement.outerHTML); // <div class="box"><h1>heading</h1></div>

