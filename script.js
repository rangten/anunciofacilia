function checkPassword() {
  const input = document.getElementById("password").value;
  const message = document.getElementById("message");
  if (input === "admin123") {
    window.location.href = "admin.html";
  } else {
    message.textContent = "Senha incorreta!";
    message.style.color = "red";
  }
}
