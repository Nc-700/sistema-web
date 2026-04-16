const form = document.getElementById("form");
const userList = document.getElementById("userList");

let users = JSON.parse(localStorage.getItem("users")) || [];

function renderUsers() {
  userList.innerHTML = "";
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${user.name} - ${user.email}
      <button onclick="deleteUser(${index})">❌</button>
    `;
    userList.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  users.push({ name, email });
  localStorage.setItem("users", JSON.stringify(users));

  form.reset();
  renderUsers();
});

function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
}

renderUsers();