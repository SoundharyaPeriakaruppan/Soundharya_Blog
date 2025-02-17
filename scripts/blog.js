var clickCard = function(html_file){
    window.location.href=html_file;
}
var tags = function (tags){
    let tagString = "";
    for (let j = 0; j < tags.length; j++) {
        tagString+= `<div class='tags' id='tags' onclick="search('${tags[j]}')">${tags[j]} </div>`;
    };
    return tagString;
}
let finalHtmlAll="";
var search = function(clickedtag){
    // Get all tags
    var tagElements = document.getElementsByClassName('tags');

    // Remove the 'selected' class from all tags
    for (var i = 0; i < tagElements.length; i++) {
        tagElements[i].classList.remove('selected');
    }

    // Add the 'selected' class to the clicked tag
    event.target.classList.add('selected');

    console.log(clickedtag);
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
          processBlogResponseClick(blogsList); 
      })
      .catch(error => {
          // Handle errors
          console.error('There was a problem with the fetch operation:', error);
      });

      function processBlogResponseClick(content){
        let getHtml = document.getElementById("blog");
        getHtml.innerHTML = "";
        let finalHtml = "<div class='card-container'>";
       
        //Iterating and creating blog cards
        for (let i = 0; i < content.length; i++) {
            const blog = content[i];
            console.log(blog);
            if(blog["tags"].includes(clickedtag)||clickedtag=="All"){
            let card = `
                    <div class="card" onclick='clickCard(\"${blog.blog_html}")'>
                        <img src="${blog.image}" alt="${blog.title}" class="card-img-top" height="200">
                        <div class="card-body">
                        <a class='title'><h3 class="card-title">${blog.title}</h3></a>
                        <p class="card-content">${blog.body}</p>
                         </div>
                         <div class="card-footer">
                         <div style="padding-bottom:10px">
                        <a href="${blog.blog_html}" class="btn btn-primary">Read More</a>
                        </div>
                        ${tags(blog.tags)}
                        </div>
                         </div>
                        `;
    
                
            finalHtml += card;
            }
        }
        finalHtml+="</div>";
        getHtml.innerHTML += finalHtml;
    }
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
                     </div>
                     <div class="card-footer">
                     <div style="padding-bottom:10px">
                    <a href="${blog.blog_html}" class="btn btn-primary">Read More</a>
                    </div>
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
//for tags on headers
let Alltags=[];
let uniqueTags=[];
const seen = {};
let Allblogs="";
let card="";
let dummycard="All";

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
  
  let finalHtml="";
  let finalHtmlblog="";
  function processBlogResponse(content) {
    let getHtml = document.getElementById("taglist");
     finalHtml = `<div class='item'>`;
    //Iterating and creating blog cards
    uniqueTags.push(dummycard);
    for (let i = 0; i < content.length; i++) {
        const blog = content[i];

         singleTag=blog.tags;
        singleTag.forEach(element => {
       Alltags=element;
       if (!seen[element]) {
        seen[element] = true;
        uniqueTags.push(Alltags);
      }
            
        });
      

         
            //console.log(Alltags);
        //finalHtml += card;
    }
    
   
   card+= `<div>
        ${tags(uniqueTags)}
         </div>`
         finalHtml += card;
          getHtmlblog = document.getElementById("blog");
          finalHtmlblog = "<div class='card-container'>";
   for (let i = 0; i < content.length; i++) {
        const blog = content[i];

            
        finalHtmlblog += `
                <div class="card" onclick='clickCard(\"${blog.blog_html}")'>
                    <img src="${blog.image}" alt="${blog.title}" class="card-img-top" height="200">
                    <div class="card-body">
                    <a class='title'><h3 class="card-title">${blog.title}</h3></a>
                    <p class="card-content">${blog.body}</p>
                     </div>
                     <div class="card-footer">
                     <div style="padding-bottom:10px">
                    <a href="${blog.blog_html}" class="btn btn-primary">Read More</a>
                    </div>
                    ${tags(blog.tags)}
                    </div>
                     </div>
            `;
    }
    //console.log(uniqueTags);
    finalHtml+="</div>";
    finalHtmlblog +="</div>";
   
    getHtml.innerHTML += finalHtml;
    getHtmlblog.innerHTML+=finalHtmlblog;
    
    
    }
    

    
}
    
   

  
//});
