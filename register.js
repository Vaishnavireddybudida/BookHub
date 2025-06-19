document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (user.password.length < 6 || user.password !== confirmPassword) {
    document.getElementById("registerError").innerText = "Password must be 6+ chars and match";
    return;
  }
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "login.html";
});

