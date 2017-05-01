// DOM Manipulation
// http://callmenick.com/post/basics-javascript-dom-manipulation

// Create a DOM Element
var element = document.createElement(tagName);

// Add Child element to the DOM
var parentElement = document.createElement("div");
var childElement = document.createElement("p");

parentElement.appendChild(childElement);

// Styling an HTML Element
element.style.color  "#000";
element.style.marginTop = "30px";
element.style.paddingBottom = "30px";

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
  var elements = document.getElementByClassName(names);

  // By Tag name
  var element = document.getElementsByTagName(name);

  // By First Found Selector
  var element = document.querySelector(selectors);
  var el = document.querySelector(".myclass");

  // By an Array of Selectors
  var elementList = document.querySelectorAll(selectors);
  var matches = document.querySelectorAll("div.note, div.alert");
  // will return a list of all the div elements these classes


// https://www.w3schools.com/jsref/dom_obj_document.asp

// https://plainjs.com/javascript/manipulation/

// http://www.hongkiat.com/blog/dom-manipulation-javascript-methods/

