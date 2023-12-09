const postsRow = document.querySelector("#postsRow");

async function getPosts() {
  const urlParams = new URLSearchParams(window.location.search);
console.log(window.location.href);


let myParam = "";

if (urlParams.has("userId")) {
  myParam = urlParams.get("userId");
  if (myParam === "") {
    const getUserId2 = prompt("Lütfen User ID giriniz, 1-10 arasında.");
    myParam = getUserId2;
  } 
} else {
  const getUserId = prompt("Lütfen User ID giriniz, 1-10 arasında.");
  myParam = getUserId;
};

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${myParam}`
  );
  data = await response.json();


  function showPosts() {
    let arr = "";
    for (let i = 0; i < data.length; i++) {
      const posts = data[i];
      arr += `<div class="card">
            <div class="card-header">
              ${posts?.title}
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${posts?.body}</p>
              </blockquote>
            </div>
          </div>`;
    }

    postsRow.innerHTML = arr;
  }
  showPosts();
}

getPosts();
