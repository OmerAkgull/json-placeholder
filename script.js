const cardsRow = document.querySelector("#cardsRow");

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  data = await response.json();
  console.log(data);
}

getUsers();

function showUsers() {

}