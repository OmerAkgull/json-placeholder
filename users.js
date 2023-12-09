let images = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1035682/pexels-photo-1035682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/920377/pexels-photo-920377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/206593/pexels-photo-206593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/1236678/pexels-photo-1236678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const cardsRow = document.querySelector("#cardsRow");

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  data = await response.json();

  function showUsers() {
    let arr = "";
    for (let i = 0; i < data.length; i++) {
      const card = data[i];
      const img = images[i];
      arr += `<div class="card my-3" style="width: 18rem;">
      <img src="${img.img}" class="card-img-top img-fluid" alt="user image">
      <div class="card-body">
          <h5 class="card-title text-center"></h5>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">Primary Info <i class="bi bi-key"></i>:<span> ${card?.name}, Username ${card?.username}</span></li>
          <li class="list-group-item">Address Info <i class="bi bi-globe2"></i>:<span> ${card?.address.street}, ${card?.address.suite}, ${card?.address.city}, ${card?.address.zipcode}</span></li>
          <li class="list-group-item">Company Info <i class="bi bi-building"></i>:<span> ${card?.company.name}, ${card?.company.catchPhrase}</span></li>
          <li class="list-group-item">Contact Info <i class="bi bi-phone"></i>:<span> ${card?.email}, ${card?.phone}, ${card?.website}</span></li>
          <li class="list-group-item"> <a href="posts.html?userId=${i+1}">Click for posts!</a></li>
      </ul>
  </div>`;
    }

    cardsRow.innerHTML = arr;
  }
  showUsers();
}

getUsers();
