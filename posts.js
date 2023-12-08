const postsRow = document.querySelector("#postsRow");

async function getPosts() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("userId");
  console.log(myParam);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${myParam}`
  );
  data = await response.json;

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
