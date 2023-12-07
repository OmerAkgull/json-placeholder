const cardsRow = document.querySelector("#cardsRow");

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  data = await response.json();

  function showUsers() {
    let arr = "";
    for (let i = 0; i < data.length; i++) {
      const card = data[i];
      arr += `<div class="card" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title text-center"></h5>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">Primary Info <i class="bi bi-key"></i>:<span>${card?.name}</span></li>
          <li class="list-group-item">Address Info <i class="bi bi-globe2"></i>:<span>${card?.address.street}</span></li>
          <li class="list-group-item">Company Info <i class="bi bi-building"></i>:<span>${card?.company.name}</span></li>
          <li class="list-group-item">Contact Info <i class="bi bi-phone"></i>:<span>${card?.email}</span></li>
      </ul>
  </div>`;
    }

    cardsRow.innerHTML = arr;
  }
  showUsers();
};

getUsers();