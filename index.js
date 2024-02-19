console.log("Linked!");

let titleElement = document.getElementById("title");
console.log(titleElement);

//Ticket 1b
let contentClass = document.getElementsByClassName("content");
console.log(contentClass);

//Ticket 1c
let listItemElements = document.getElementsByTagName("li");
console.log(listItemElements);

//Ticket 1d - shouldn't use querySelector as a variable as is not best practice;
// have used .highlight to find the '.highlight' class in CSS file
let highlightedElement = document.querySelector(".highlight");
console.log(highlightedElement);

//Ticket 1e - returns 'NodeList (3)' with all the highlighted elements listed
let allHighlightedElements = document.querySelectorAll(".highlight")
console.log(allHighlightedElements);