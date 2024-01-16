const submitForm = document.querySelector(".login-form");

submitForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const form = ev.target;
  var email = form.elements.email.value.trim();
  var password = form.elements.password.value.trim();
  const collectedData = {
    email: email,
    password: password,
  };
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(collectedData);
    form.reset();
  }
});
