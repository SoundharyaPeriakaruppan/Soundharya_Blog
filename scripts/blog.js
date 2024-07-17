var clickCard = function(html_file){
    window.location.href=html_file;
}
let blogsList;
window.onload = function () {
  // Fetch data from the URL
  if(!blogsList){
    fetch("./blogs_list.json")    
    .then(response => {
          // Check if response is successful
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          console.log(response);
          // Parse response as JSON
          return response.json();
      })
      .then(content => {
          // Process the retrieved data
          blogsList = content;
          processBlogResponse(blogsList); 
      })
      .catch(error => {
          // Handle errors
          console.error('There was a problem with the fetch operation:', error);
      });
  }
  
function tags(tags){
    let tagString = "";
    for (let j = 0; j < tags.length; j++) {
        tagString+= `<div class='tags'>${tags[j]} </div>`;
    };
    return tagString;
}
  function processBlogResponse(content) {
    let getHtml = document.getElementById("blog");
    let finalHtml = "<div class='card-container'>";
    //Iterating and creating blog cards
    for (let i = 0; i < content.length; i++) {
        const blog = content[i];
        let card = `
                <div class="card" onclick='clickCard(\"${blog.blog_html}")'>
                    <img src="${blog.image}" alt="${blog.title}" class="card-img-top" height="200">
                    <div class="card-body">
                    <a class='title'><h3 class="card-title">${blog.title}</h3></a>
                    <p class="card-content">${blog.body}</p>
                    <a href="${blog.blog_html}" class="btn btn-primary">Read More</a>
                    ${tags(blog.tags)}
                    </div>
                </div>
            `;

            
        finalHtml += card;
    }
    finalHtml+="</div>";
    getHtml.innerHTML += finalHtml;
  }
}
//});
