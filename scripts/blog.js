var clickCard = function(html_file){
    // Redirect to a new page with the ID appended to the URL
    //window.location.href = "blog_details.html?id=" + id;
    window.location.href=html_file;

}
//window.addEventListener("load", function() {
    // Code from script2.js

window.onload = function () {
  // Fetch data from the URL
  //fetch("https://jsonplaceholder.typicode.com/posts")
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
          processBlogResponse(content); 
      })
      .catch(error => {
          // Handle errors
          console.error('There was a problem with the fetch operation:', error);
      });

  function processBlogResponse(content) {
    let getHtml = document.getElementById("blog");
    let finalHtml = "<div class='card-container'>";
    for (let i = 0; i < content.length; i++) {
        // let htmlContent = '<div>';
        // htmlContent += "<div class='card-container'>";
        // htmlContent += "<div class='card' onclick='clickCard(\""+content[i].blog_html+"\")'>"; 
        // htmlContent += "<h3><a class='title'>" + content[i].title + "</a></h3>" + "<br>";
        // htmlContent += "<div class='card-content'>" + content[i].body + "</div>" + "</div>" + "</div>" + "</div>";
        const blog = content[i];
        let card = `
                <div class="card" onclick='clickCard(\"${blog.blog_html}")'>
                    <!-- <img src="${blog.image}" alt="${blog.title}" class="card-img-top" height="200"> -->
                    <div class="card-body">
                    <a class='title'><h3 class="card-title">${blog.title}</h3></a>
                    <p class="card-content">${blog.body}</p>
                    <a href="${blog.blog_html}" class="btn btn-primary">Read More</a>
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
