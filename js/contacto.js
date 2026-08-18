
function submitForm(button) {
  let valid = true;

  function check(id, pattern, message) {
    const input = document.getElementById(id);
    const error = document.getElementById(id + "Error");

    if (!pattern.test(input.value)) {
      error.innerText = message;
      error.style.display = "block";
      input.style.border = "2px solid red";
      valid = false;
    } else {
      error.style.display = "none";
      input.style.border = "2px solid black";
    }
  }

  check("name", /^[A-Za-z]{3,40}$/, "Máximo 40 letras solamente.");
  check("surname", /^[A-Za-z]{4,60}$/, "Máximo 60 letras solamente.");
  check("phone", /^\d{9}$/, "Debe tener 9 dígitos.");
  check("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Correo electrónico inválido.");

  if (valid) {
    button.textContent = "Enviado";
    button.classList.add("submitted");
    button.disabled = true;
  }
}

function clearForm(button) {
  const ids = ["name", "surname", "phone", "email" , "comment"];

  ids.forEach(id => {
    const input = document.getElementById(id);
    const error = document.getElementById(id + "Error");

    if (input) {
      input.value = "";
      input.style.border = "";
    }
    if (error) {
      error.innerText = "";
      error.style.display = "none";
    }
  });
}









