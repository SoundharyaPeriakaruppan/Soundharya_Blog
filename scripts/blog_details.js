const currentUrl = window.location.href;
//console.log("Current URL:", currentUrl);
const url=new URL(currentUrl);
const idValue=url.searchParams.get("id");
fetch("https://jsonplaceholder.typicode.com/posts/"+idValue)
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
          let getidhtml=document.querySelector(".content");
          getidhtml.innerHTML+="<div>"+"userId: "+content.userId+" id "+content.id+" Title: "+content.title+" Body: "+content.body+"</div>";
      })
      .catch(error => {
          // Handle errors
          console.error('There was a problem with the fetch operation:', error);
      });