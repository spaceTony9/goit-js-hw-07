const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (el) => {
    const inputValue = el.currentTarget.value.trim();
    output.textContent = inputValue === "" ? "Anonymous" : inputValue;
});