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
    let finalHtml = '';
    for (let i = 0; i < content.length; i++) {
        let htmlContent = '<div>';
        htmlContent += "<div class='card-container'>";
        htmlContent += "<div class='card' onclick='clickCard(\""+content[i].blog_html+"\")'>"; 
        htmlContent += "<h3>" + content[i].title + "</h3>" + "<br>";
        htmlContent += "<div class='card-content'>" + content[i].body + "</div>" + "</div>" + "</div>" + "</div>";
        finalHtml += htmlContent;    
    }
    getHtml.innerHTML += finalHtml;
  }
}
//});
