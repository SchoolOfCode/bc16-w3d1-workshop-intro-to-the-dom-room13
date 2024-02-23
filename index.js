console.log("Linked!");

// Ticket 1a
let titleElement = document.getElementById("title");
console.log(titleElement);

// Ticket 1b
let contentClass = document.getElementsByClassName("content");
console.log(contentClass);

// Ticket 1c
let listItemElements = document.getElementsByTagName("li");
console.log(listItemElements);

// Ticket 1d - shouldn't use querySelector as a variable as is not best practice;
// have used .highlight to find the '.highlight' class in CSS file
let highlightedElement = document.querySelector(".highlight");
console.log(highlightedElement);

// Ticket 1e - returns 'NodeList (3)' with all the highlighted elements listed
let allHighlightedElements = document.querySelectorAll(".highlight")
console.log(allHighlightedElements);

// Ticket 2a: Parent Node
// create new parent node (div element)
// let newParentNode = document.createElement("div")
// create unordered list (ul element)
// document.createElement("ul")
// newParentNode.appendChild("ul")
let firstListItem = document.querySelector("#itemList li");
let parentElement = firstListItem.parentNode;
console.log(parentElement);

// Ticket 2b: Child Nodes
let itemList = document.querySelector("ul");
let childNodes = itemList.childNodes;
console.log(childNodes);

// Ticket 2c: Element Children
let itemList1 = document.querySelector("ul");
let elementChildren = itemList1.children;
console.log(elementChildren);

// Ticket 2d: First and Last Child
let firstLastChild = document.querySelector("ul");
let firstChild = firstLastChild.firstChild;
let lastChild = firstLastChild.lastElementChild;
 console.log(firstChild);
 console.log(lastChild);

// Ticket 2e: Sibling Nodes
let sibling = document.querySelector("li.highlight")
console.log(sibling)

let nextSibling = sibling.nextSibling
let previousSibling = sibling.previousElementSibling //Element rather than text node

console.log(nextSibling)
console.log(previousSibling)

// Ticket 3a: Set color
titleElement.style.color = "red"
titleElement.style.fontSize = "30px"

// Ticket 3b: Creating and Adding Elements
let para = document.createElement("p")
para.textContent = "This is a dynamically added paragraph"
document.body.appendChild

// Ticket 3c: Modifying Text
let para = document.createElement("p")


// Ticket 3d: Modifying Attributes

// Ticket 3e: Adding and Removing Classes

// Ticket 3f: Removing Elements
