const firtsname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const job = document.getElementById("job");

document.getElementById("welcomeLocal").innerHTML =
  localStorage.getItem("userName") == null
    ? "Bienvenido"
    : "Bienvenido " + localStorage.getItem("userName");

const saveLocal = () => {
  localStorage.setItem("userName", firstname.value + "" + lastname.value);
  localStorage.setItem("job", job.value);
};

document.getElementById("welcomeSession").innerHTML =
  localStorage.getItem("email") == null
    ? "Tu email no esta registrado"
    : "Estas registrado con el email: " + localStorage.getItem("email");

const saveSession = () => {
  localStorage.setItem("email", email.value);
  localStorage.setItem("country", country.value);
};

const logout = () => {
  localStorage.clear();
  location.reload();
};
