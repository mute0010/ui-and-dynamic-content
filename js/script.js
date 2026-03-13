// save references to elements
const textField = document.querySelector("#itemInput");
const newItemButton = document.querySelector("#addButton");
const itemList = document.querySelector("#itemList");
const feedback = document.querySelector(".feedback");


// start function addItem
function addItem(){

// create list item
const listItem = document.createElement("li");

// checks if user entered a value
if(textField.value !== ""){

// assign the text from input to the list item
listItem.textContent = textField.value;

// add list item to the unordered list
itemList.appendChild(listItem);

// clear feedback message
feedback.textContent = "";

// clear the text field
textField.value = "";

// put cursor back in text field
textField.focus();

}

// if nothing was entered
else{

// show error message
feedback.textContent = "Nothing entered!";

}

}

// register click event on button
newItemButton.addEventListener("click", addItem);