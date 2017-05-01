// DOM Manipulation
// http://callmenick.com/post/basics-javascript-dom-manipulation
// https://plainjs.com/javascript/
// http://www.hongkiat.com/blog/dom-manipulation-javascript-methods/


// Create a DOM Element
var element = document.createElement(tagName);

// Add or Remove a Child element in the DOM
var parentElement = document.createElement("div");
var childElement = document.createElement("p");

parentElement.appendChild(childElement);
parentElement.removeChild(childElement);




// Styling an HTML Element
element.style.color  "#000";
element.style.marginTop = "30px";
element.style.paddingBottom = "30px";

var el = document.querySelector('div');

el.style.backgroundColor = 'green';
el.style.display = 'none';
el.style['border-radius'] = '5px';
el.style.cssText += 'background: green, display: none;';

// Getting and Setting the HTML Elements
var content = element.innerHTML; 
otherElement.innerHTML = content;

// Getting and Setting the Class Name
var cName = element.className;
otherElement.className = cName;

// Getting and Setting the ID
var myId = element.id;
otherElement.id = myId;

////////////////////////////
// Accessing DOM Elements //
////////////////////////////

  // By Class Names
  var elements = document.getElementsByClassName(names);

  // By Tag name
  var element = document.getElementsByTagName(name);

  // By First Found Selector
  var element = document.querySelector(selectors);
  var el = document.querySelector(".myclass");

  // By an Array of Selectors
  var elementList = document.querySelectorAll(selectors);
  var matches = document.querySelectorAll("div.note, div.alert");
  // will return a list of all the div elements these classes



// Events
// Three methods for event listeners
// 1. HTML
// <button onclick="foo">Alert</button>
// 2. JavaScript
var btn = document.querySelector('button');
btn.onclick= "foo";
// 3. JavaScript
var btn = document.querySelector('button');
btn.addEventListener('click', foo);


// Replace child 
// <div>
//   <strong>hello</strong>
// </div>
var em = document.createElement('em');
var strong = document.querySelector('strong');
var div = document.querySelector('div');
em.textContent = 'hi';
div.replaceChild(em, strong);


// Attributes

element.setAttribute(name, value);
element.setAttribute('href', 'http://www.google.com');


element.getAttribute(name);
element.removeAttribute(name);

// https://www.w3schools.com/jsref/dom_obj_document.asp



