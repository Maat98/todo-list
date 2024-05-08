// IEFE
(() => {
    // state variables
let toDoListArray = [];
// ui variables
const form = document.querySelector(".form");
const input = form.querySelector(".form_input");
const ul = document.querySelector(".toDoList");

// event listeners
form.addEventListener("submit", (e) => {
// prevent default behavior - page reload
    e.preventDefault();
// give item a unique ID
    let itemId = string(Date.now());
//get/assign input value
    let toDoItem = input.value;
//pass ID and add item into functions
    addItemToDOM(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);
//clear the input box. (this is default behavior but we got rid of that)
    input.value = "";
});

ul.addEventListener("click", (e) => {
    let id = e.target.getAttribute("data-id");
    if (!id) return; // user clicked something else
    //pass id through to functions
    removeItemFromDOM(id);
    removeItemFromArray(id);
});

// functions
function addItemToDOM(itemId, toDoItem) {
    // create an li
    const li = document.createElement("li");
    li.setAttribute("data id", itemId);
    // add toDoItem text to li
    li.innerText = toDoItem;
    ul.appendChild(li);
}

function addItemToArray(itemId, toDoItem) {
    //add item to array as an object with an ID so we can find and delete it later
    toDoListArray.push({
        id: itemId,
        toDoItem: toDoItem,
    });
    console.log(toDoListArray)
    
}

function removeItemFromDOM(id) {
    // get the list item data ID
    var li = document.querySelector('[data-id="' + id + '"]');
    // remove the list item
    ul.removeChild(li);
}

function removeItemFromArray(id) {
    // create a new toDoListArray with all li's that don't match the ID
    toDoListArray = toDoListArray.filter((item) => {
        item.id!== id;
    });
    console.log(toDoListArray)
}
})();