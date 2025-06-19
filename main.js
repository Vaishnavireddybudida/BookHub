window.onload = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const authButtons = document.getElementById('authButtons');
  if (user) {
    authButtons.innerHTML = '<a href="dashboard.html">Dashboard</a> <a href="#" onclick="logout()">Logout</a>';
  }
};
function logout() {
  localStorage.removeItem('user');
  window.location.href = 'index.html';
}
