const categories = document.querySelector("#categories");
console.log("Number of Categories:", categories.childElementCount);
Array.from(categories.children).forEach(childElem => {
    console.log("Category:", childElem.firstElementChild.textContent);
    console.log("Elements:", childElem.lastElementChild.childElementCount);
});