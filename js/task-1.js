const categories = document.querySelectorAll(".item");
console.log("Number of Categories:", categories.length);
categories.forEach(childElem => {
    console.log("Category:", childElem.firstElementChild.textContent);
    console.log("Elements:", childElem.lastElementChild.childElementCount);
});