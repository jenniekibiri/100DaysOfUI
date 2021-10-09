const submit = document.getElementById("submit");
submit.addEventListener("click", validate);
function validate(e) {
  e.preventDefault();
  if (!email.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    email.classList.add("invalid");
  }
  else{
      nameError.classList.remove("visible")
      email.classList.remove("invalid")
  }
}



